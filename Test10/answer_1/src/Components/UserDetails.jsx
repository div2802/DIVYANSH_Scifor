import React from 'react';

const UserDetails = ({ name, age, email, mobileNo, city }) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <p>Mobile No: {mobileNo}</p>
            <p>City: {city}</p>
        </div>
    );
};

export default UserDetails;
