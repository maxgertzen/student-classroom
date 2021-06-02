import React, { useState, useEffect } from 'react';
import List from '../../components/List/List';
import UserProfile from '../../components/UserProfile/UserProfile';
import './StudentsPage.css';
import { default as api } from '../../Dal/usersAPI';


function StudentsPage() {
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState({})

    useEffect(() => {
        setStudents(api.getAll());
    }, [])

    const handleSelect = (id) => {
        let newStudent = api.getOne(id)
        setSelectedStudent(newStudent)
    }

    return (
        <div className="classroom-app-container">
            <List data={students} showEntry={handleSelect} />
            <UserProfile user={selectedStudent} />
        </div>
    )
}

export default StudentsPage