import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function List({ data, showEntry }) {
    return (
        <ListGroup>
            {data.map(({ _id: id, username, course, grade }) => {
                return (<ListGroup.Item key={id} action variant="outline-info" onClick={e => showEntry(id)}>
                    {`${username}  -  ${course}${grade ? `  -  ${grade}` : ''}`}
                </ListGroup.Item>)
            })}
        </ListGroup>
    )
}

export default List