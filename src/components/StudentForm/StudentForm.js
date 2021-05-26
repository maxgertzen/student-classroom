import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FaCity } from 'react-icons/fa';
function StudentForm() {

    return (
        <Form>
            <Form.Row>
                <Col>
                    <label htmlFor="usernameInput">Username</label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="usernameInput">
                                <FaCity />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="text" id="usernameInput" />
                    </InputGroup>
                </Col>
                <Col>
                    <Form.Group controlId="emailInput">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Course Option</Form.Label>
                        <Form.Control as="select">
                            {<option>loopedOption</option>}
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <div className="d-flex flex-column align-items-center justify-content-start">
                        <label htmlFor="gender-select">Gender</label>
                        <Form.Group>
                            <ToggleButtonGroup type="radio" name="gender" defaultValue={1} id="gender-select">
                                <ToggleButton variant="outline-success" value={1}>
                                    Female
                                </ToggleButton>
                                <ToggleButton variant="outline-success" value={2}>
                                    Male
                                </ToggleButton>
                                <ToggleButton variant="outline-success" value={3}>
                                    Other
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>
                    </div>
                </Col>
            </Form.Row>
            <Form.Row>
                <Button variant="primary" size="lg" type="submit" block>
                    Submit
                </Button>
            </Form.Row>
        </Form>
    )
}

export default StudentForm;