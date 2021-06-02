import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FaCity, FaMailBulk, FaUserCircle, FaGraduationCap, FaTransgenderAlt } from 'react-icons/fa';
function StudentForm() {
    const courses = ['JavaScript', 'NodeJs', 'CSS', 'Sass']
    return (
        <Form style={{ width: '50vw' }}>
            <Row className="my-2">
                <Col>
                    <label htmlFor="usernameInput">Username</label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="usernameInput">
                                <FaUserCircle />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="text" id="usernameInput" />
                    </InputGroup>
                </Col>
                <Col>
                    <label htmlFor="emailInput">Email</label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="emailInput">
                                <FaMailBulk />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="email" id="emailInput" />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="my-2">
                <Col>
                    <label htmlFor="addressInput">Address</label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="addressInput">
                                <FaCity />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="text" id="addressInput" />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="my-2">
                <Col>
                    <label htmlFor="courseInput">Course Option</label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="courseInput">
                                <FaGraduationCap />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control as="select">
                            {
                                courses.map(course => <option>{course}</option>)
                            }
                        </Form.Control>
                    </InputGroup>
                </Col>
                <Col>
                    <div className="d-flex flex-column">
                        <label htmlFor="gender-select">Gender</label>
                        <InputGroup>
                            <InputGroup.Text id="gender-select" style={{ borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }}>
                                <FaTransgenderAlt />
                            </InputGroup.Text>
                            <ToggleButtonGroup type="radio" name="gender" defaultValue={1} style={{ flex: 1 }}>
                                <ToggleButton variant="outline-success" value={1} style={{ borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }}>
                                    Female
                                </ToggleButton>
                                <ToggleButton variant="outline-success" value={2}>
                                    Male
                                </ToggleButton>
                                <ToggleButton variant="outline-success" value={3}>
                                    Other
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </InputGroup>
                    </div>
                </Col>
            </Row>
            <Row className="my-3">
                <Button variant="primary" size="lg" type="submit" block>
                    Submit
                </Button>
            </Row>
        </Form>
    )
}

export default StudentForm;