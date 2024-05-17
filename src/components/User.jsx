import React from 'react';


const User = ({ user, deleteUser, setEditingUser }) => {
    return (


        // <div className='container-lg-2'>

        //     <h5>UserName :{user.name} </h5>
        //     <h5> Email:({user.email})</h5>
        //     <button className='edit' onClick={() => setEditingUser(user)}>Edit</button>
        //     <button className='delete' onClick={() => deleteUser(user.id)}>Delete</button>

        // </div>

        <div className="col-sm-4">
            <div className="card">
                <div className="card-body">
                    <p className="card-text">UserName :{user.name}</p>
                    <p className="card-text">Email:{user.email}</p>
                    {/* <a href="#" className="btn btn-primary">Edit</a> */}
                    <button className='edit' onClick={() => setEditingUser(user)}>Edit</button>
                    <button className='delete' onClick={() => deleteUser(user.id)}>Delete</button>
                </div>
            </div>
        </div>

    );
};

export default User;
