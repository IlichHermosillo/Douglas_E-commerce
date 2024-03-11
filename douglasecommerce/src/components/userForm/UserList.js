// UserList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/user')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Welcome to Douglas E-commerce</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.firstName} {user.lastName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
