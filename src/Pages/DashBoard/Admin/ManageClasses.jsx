import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import Modal from "react-modal";

const ManageClasses = () => {


    const [feedback, setFeedback] = useState("");
    const [selectedClassId, setSelectedClassId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [axiosSecure] = useAxiosSecure();


    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })

    const handleApproved = (id) => {
        console.log(id);
        fetch(`https://a-dance-school-server.vercel.app/classes?id=${id}&status=approved`, {
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

    const handleDeny = (classId) => {
        setSelectedClassId(classId);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setFeedback("");
        setSelectedClassId(null);
    };

    const handleFeedbackSubmit = async () => {
        try {
            await axiosSecure.post(`/classes/${selectedClassId}/deny`, { feedback });
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "class  denied ",
                showConfirmButton: false,
                timer: 1500,
            });
            setFeedback("");
            setIsModalOpen(false);
            setSelectedClassId(null);
            refetch();
        } catch (error) {
            console.error(error);

        }
    };


    return (
        <>
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
                                <th className='flex items-center gap-3'>
                                    <button onClick={() => handleApproved(cls._id)} disabled={
                                        cls.status === "approved"
                                            ? true
                                            : cls.status === "denied"
                                                ? true
                                                : false
                                    } className="btn  btn-success">Approve</button>


                                    <div>
                                        <button
                                            disabled={
                                                cls.status === "approved"
                                                    ? true
                                                    : cls.status === "denied"
                                                        ? true
                                                        : false
                                            }
                                            className="btn  btn-success"
                                            onClick={() => handleDeny(cls._id)}
                                        >
                                            deny
                                        </button>

                                    </div>

                                </th >
                            </tr >)
                        }
                    </tbody >
                </table >
            </div >

            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleModalClose}
                contentLabel="Feedback Modal"
            >
                <h2>Deny Class Item</h2>
                <label>Feedback:</label>
                <input
                    type="text"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                />
                <button className='btn btn-success mr-3' onClick={handleFeedbackSubmit}>Submit Feedback</button>
                <button className='btn btn-error' onClick={handleModalClose}>Cancel</button>
            </Modal>
        </>
    );
};

export default ManageClasses;