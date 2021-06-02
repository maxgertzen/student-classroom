import React, { useState, useEffect } from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import './StudentsPage.css';
import { default as api } from '../../Dal/usersAPI';
import StudentsTable from '../../components/StudentsTable/StudentsTable';


function StudentsPage({ data }) {
    const [showStudents, setShowStudents] = useState(data);
    const [selectedStudent, setSelectedStudent] = useState({})

    useEffect(() => {
        setShowStudents(data);
    }, [data])

    const handleSelect = (id) => {
        let newStudent = api.getOne(id)
        setSelectedStudent(newStudent)
    }

    return (
        <div className="classroom-app-container">
            <StudentsTable data={showStudents} showEntry={handleSelect} />
            <UserProfile user={selectedStudent} />
        </div>
    )
}

export default StudentsPage