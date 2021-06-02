import React, { useState, useEffect } from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import './StudentsPage.css';
import { default as api } from '../../Dal/usersAPI';
import StudentsTable from '../../components/StudentsTable/StudentsTable';


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
            <StudentsTable data={students} showEntry={handleSelect} />
            <UserProfile user={selectedStudent} />
        </div>
    )
}

export default StudentsPage