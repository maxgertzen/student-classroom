import React, { useEffect, useState } from 'react';
import './UserProfile.css'
import imgFemale from '../../assets/studentFemale.png';
import imgMale from '../../assets/studentMale.png';
function UserProfile({ user }) {
    const [image, setImage] = useState(imgFemale);
    const [showMessage, setShowMessage] = useState(true)
    useEffect(() => {
        if ('gender' in user) {
            setShowMessage(false)
            if (user.gender === 'Other') setImage(imgFemale)
            else if (user.gender === 'Female') setImage(imgFemale)
            else if (user.gender === 'Male') setImage(imgMale)
        }
    }, [user])

    return (
        <div className="user-profile neon neon__card">
            {showMessage ? <div className="neon__message">Select student to see details</div> : <img src={image} alt={`${user.gender} avatar`} className="student-avatar neon_icon" />}
            {
                Object.entries(user).map((entry, index) => {
                    if (entry[0] !== '_id') {
                        return <p key={index} className="neon__title"><span className="userProp neon__description">{entry[0]}:</span>{entry[1]}</p>
                    }
                    return null
                })
            }
        </div>
    )
}

export default UserProfile