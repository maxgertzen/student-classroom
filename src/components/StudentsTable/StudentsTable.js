import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { FaSortDown } from 'react-icons/fa';
import Spinner from 'react-bootstrap/Spinner'
import { CSSTransition } from 'react-transition-group';
import './StudentsTable.css';

function StudentsTable({ data, showEntry, sortIt }) {
    const [show, setShow] = useState(false);
    useEffect(
        () => {
            let timer1 = setTimeout(() => setShow(true), 1000);
            return () => {
                setShow(false)
                clearTimeout(timer1);
            };
        },
        [data]
    );
    return (
        <Table size={'sm'} striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username<FaSortDown style={{ verticalAlign: 'initial', float: 'right' }} onClick={sortIt((a, b) => a.username - b.username)} /></th>
                    <th>Course<FaSortDown style={{ verticalAlign: 'initial', float: 'right' }} onClick={sortIt((a, b) => a.course - b.course)} /></th>
                </tr>
            </thead>

            <tbody>
                {
                    data && show ?
                        data.map(({ _id: id, username, course }, index) => {
                            return (
                                <tr key={id} onClick={e => showEntry(id)}>
                                    <td>{index + 1}</td>
                                    <td>{username}</td>
                                    <td>{course}</td>
                                </tr>)
                        })
                        :
                        <tr className="spinnerShown">
                            <td colSpan="3">
                                <CSSTransition
                                    in={!show}
                                    timeout={300}
                                    classNames="table"
                                    onEnter={() => setShow(true)}
                                    onExited={() => setShow(false)}
                                >
                                    <Spinner animation="border" role="status">
                                    </Spinner>
                                </CSSTransition>
                            </td>
                        </tr>
                }
            </tbody>
        </Table>
    )
}

export default StudentsTable