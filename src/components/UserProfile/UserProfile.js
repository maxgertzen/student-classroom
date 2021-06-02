import React, { useEffect, useState } from 'react';
import imgFemale from '../../assets/studentFemale.png';
import imgMale from '../../assets/studentMale.png';
function UserProfile({ user }) {
    const [image, setImage] = useState(imgFemale);

    useEffect(() => {
        if ('gender' in user) {
            if (user.gender === 'Other') setImage(imgFemale)
            else if (user.gender === 'Female') setImage(imgFemale)
            else if (user.gender === 'Male') setImage(imgMale)
        }
    }, [user])

    return (
        <div className="user-profile">
            {user.gender ? <img src={image} alt={`${user.gender} avatar`} className="student-avatar" /> : null}
            {
                Object.entries(user).map((entry, index) => {
                    if (entry[0] !== '_id') {
                        return <p key={index}><span className="userProp">{entry[0]}</span> : {entry[1]}</p>
                    }
                    return null
                })
            }
        </div>
    )
}

export default UserProfile