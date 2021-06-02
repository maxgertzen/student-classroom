import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { FaSortDown } from 'react-icons/fa';
import Spinner from 'react-bootstrap/Spinner'
function StudentsTable({ data, showEntry }) {
    const [show, setShow] = useState(false)
    useEffect(
        () => {
            let timer1 = setTimeout(() => setShow(true), 8000000);
            return () => {
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
                    <th>Username<FaSortDown style={{ verticalAlign: 'initial', float: 'right' }} /></th>
                    <th>Course<FaSortDown style={{ verticalAlign: 'initial', float: 'right' }} /></th>
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