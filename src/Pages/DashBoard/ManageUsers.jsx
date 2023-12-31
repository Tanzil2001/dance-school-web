import React from 'react';
import Swal from 'sweetalert2';
import useUsers from '../../hooks/useUsers';


const ManageUsers = () => {
   
    const [users, refetch] =useUsers();

    const handleAdmin = (user) => {
        console.log(user);
        fetch(`https://a-dance-school-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    };

    const handleInstructor = (user) => {
        fetch(`https://a-dance-school-server.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }
    return (
        <div className="w-full">
            <h3 className="text-3xl font-semibold my-4">Total Users : {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className='flex items-center gap-3'>{user.role === 'admin' ? <button className='btn btn-disabled'>admin</button> : <button onClick={() => handleAdmin(user)} className="btn btn-success">
                                    Make Admin
                                </button>}
                                    {user.role === 'instructor' ? <button className='btn btn-disabled'>instructor</button> : <button onClick={() => handleInstructor(user)} className="btn btn-success">Make Instructor</button>}

                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;