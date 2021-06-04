import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { FaSortDown, FaSortUp } from 'react-icons/fa';
import Spinner from 'react-bootstrap/Spinner'
// import { CSSTransition } from 'react-transition-group';
import './StudentsTable.css';

function StudentsTable({ data, showEntry, sortIt }) {
    const [show, setShow] = useState(false);
    const [isValAsc, setIsValAsc] = useState({
        username: false,
        course: false
    })
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

    const sortTable = (type, directionIsAsc) => {
        if (!directionIsAsc) {
            sortIt((a, b) => a[type].localeCompare(b[type]));
            setIsValAsc((prevState => ({
                ...prevState,
                [type]: true
            })))
        } else {
            sortIt((a, b) => b[type].localeCompare(a[type]));
            setIsValAsc((prevState => ({
                ...prevState,
                [type]: false
            })))
        }
    }

    return (
        <Table size={'sm'} striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username{
                        <div className="sorting-btns">
                            {
                                isValAsc['username'] ?
                                    <FaSortUp style={{ display: 'block' }} onClick={() => sortTable('username', isValAsc['username'])} />
                                    :
                                    <FaSortDown style={{ display: 'block', marginTop: '-10px' }} onClick={() => sortTable('username', isValAsc['username'])} />
                            }
                        </div>
                    }
                    </th>
                    <th>Course{
                        <div className="sorting-btns">
                            {
                                isValAsc['course'] ?
                                    <FaSortUp style={{ display: 'block' }} onClick={() => sortTable('course', isValAsc['course'])} />
                                    :
                                    <FaSortDown style={{ display: 'block', marginTop: '-10px' }} onClick={() => sortTable('course', isValAsc['course'])} />
                            }
                        </div>
                    }
                    </th>
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
                                <Spinner animation="border" role="status">
                                </Spinner>
                            </td>
                        </tr>
                }
            </tbody>
        </Table>
    )
}

export default StudentsTable