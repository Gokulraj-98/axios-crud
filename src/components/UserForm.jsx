import React, { useState, useEffect } from 'react';

const UserForm = ({ addUser, updateUser, editingUser }) => {
    const [user, setUser] = useState({ name: '', email: '' });

    useEffect(() => {
        if (editingUser) {
            setUser(editingUser);
        } else {
            setUser({ name: '', email: '' });
        }
    }, [editingUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingUser) {
            updateUser(user);
        } else {
            addUser(user);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input className='name' type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" required />
            <input className='email' type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" required />
            <button className='submitButton' type="submit">{editingUser ? 'Update User' : 'Add User'}</button>
        </form>
    );
};

export default UserForm;
