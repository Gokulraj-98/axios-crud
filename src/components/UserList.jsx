import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User';
import UserForm from './UserForm';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const addUser = async (user) => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);
            setUsers([...users, response.data]);
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    const updateUser = async (user) => {
        try {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
            setUsers(users.map((u) => (u.id === user.id ? response.data : u)));
            setEditingUser(null);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            setUsers(users.filter((u) => u.id !== id));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div>
            <h1>User List</h1>
            <UserForm addUser={addUser} updateUser={updateUser} editingUser={editingUser} />
            <div className='container'>
                <div className="row">
                    {users.map((user) => (
                        <User key={user.id} user={user} deleteUser={deleteUser} setEditingUser={setEditingUser} />
                    ))}

                </div>
            </div>
        </div>

    );
};

export default UserList;
