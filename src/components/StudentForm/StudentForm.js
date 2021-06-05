import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FaCity, FaMailBulk, FaUserCircle, FaGraduationCap, FaTransgenderAlt } from 'react-icons/fa';
import FormErrorMessage from '../FormErrorMessage/FormErrorMessage';


function StudentForm({ onChangedValue, errors }) {
    const courses = ['JavaScript', 'NodeJs', 'CSS'];

    return (
        <Form style={{ width: '50vw' }} id="student-add-form">
            <Row className="my-2">
                <Col>
                    <label htmlFor="usernameInput">Username</label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="usernameInput">
                                <FaUserCircle />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="text" id="usernameInput" name="username" onChange={e => onChangedValue(e)} required />
                        <FormErrorMessage errors={errors.username} />
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
                        <Form.Control type="email" id="emailInput" name="email" onChange={onChangedValue} required />
                        <FormErrorMessage errors={errors.email} />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="my-2">
                <Col>
                    <label htmlFor="addressInput">Address</label>
                    <InputGroup className={`${errors.address ? 'has-errors' : ''}`}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="addressInput">
                                <FaCity />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="text" id="addressInput" name="address" onChange={onChangedValue} required />
                        <FormErrorMessage errors={errors.address} />
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
                        <Form.Control as="select" name="course" defaultValue="Select a course" onChange={onChangedValue} required>
                            <option value="Select a course" disabled>Select a course</option>
                            {
                                courses.map((course, index) => <option key={index}>{course}</option>)
                            }
                        </Form.Control>
                        <FormErrorMessage errors={errors.course} />
                    </InputGroup>
                </Col>
                <Col>
                    <div className="d-flex flex-column">
                        <label htmlFor="gender-select">Gender</label>
                        <InputGroup>
                            <InputGroup.Text id="gender-select" style={{ borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }}>
                                <FaTransgenderAlt />
                            </InputGroup.Text>
                            <ToggleButtonGroup type="radio" name="gender" style={{ flex: 1 }} onChange={e => onChangedValue({ target: { value: e, name: 'gender' } })} required>
                                <ToggleButton variant="outline-success" value={'Female'} style={{ borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }}>
                                    Female
                                </ToggleButton>
                                <ToggleButton variant="outline-success" value={'Male'}>
                                    Male
                                </ToggleButton>
                                <ToggleButton variant="outline-success" value={'Other'}>
                                    Other
                                </ToggleButton>
                            </ToggleButtonGroup>
                            <FormErrorMessage errors={errors.gender} />
                        </InputGroup>
                    </div>
                </Col>
            </Row>
        </Form>
    )
}

export default StudentForm;