import React from 'react';
import Table from 'react-bootstrap/Table';

function StudentsTable({ data, showEntry }) {

    return (
        <Table size={'sm'} striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Course</th>
                </tr>
            </thead>
            <tbody>
                {data.map(({ _id: id, username, course }, index) => {
                    return (
                        <tr key={id} onClick={e => showEntry(id)}>
                            <td>{index + 1}</td>
                            <td>{username}</td>
                            <td>{course}</td>
                        </tr>)
                })}
            </tbody>
        </Table>
    )
}

export default StudentsTable