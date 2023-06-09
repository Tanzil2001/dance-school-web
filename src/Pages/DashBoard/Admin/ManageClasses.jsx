import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })

    const handleApproved = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/classes/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'ok',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    };

    return (
        <div className="overflow-x-auto w-full">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                #
                            </label>
                        </th>
                        <th>Image & Name</th>
                        <th>Instructor name</th>
                        <th>Instructor email</th>
                        <th>Available seats</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        classes.map((cls, index) => <tr key={cls._id}>
                            <th>
                                <label>
                                    {index + 1}
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={cls.classImage}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{cls.className}</div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                {cls.instructorName}
                            </td>
                            <td>{cls.instructorEmail}</td>
                            <td>{cls.seats}</td>
                            <td>{cls.price}</td>
                            <th>
                                {cls.status === 'approved' ? 'approved' : <button onClick={() => handleApproved(cls._id)} className="btn btn-ghost btn-xs">Approve</button>}
                                {/* to do  bakir nam faki*/}

                                <button className="btn btn-ghost btn-xs">Deny</button>

                                <button className="btn" onClick={() => window.my_modal_1.showModal()}>Feedback</button>
                                <dialog id="my_modal_1" className="modal">
                                    <form method="dialog" className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <textarea name="feedback" id="" cols="40" rows="5"></textarea>
                                        <div className="modal-action">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button onClick={() => handleFeedback(cls._id)} className="btn">submit</button>
                                            
                                        </div>
                                    </form>
                                </dialog>

                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageClasses;