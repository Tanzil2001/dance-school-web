import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useSelecedClass from '../../hooks/useSelecedClass';
import useUsers from '../../hooks/useUsers';

const ShowClass = ({ approvedCls }) => {
    const [isClassSelected, setIsClassSelected] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useSelecedClass();
    const { user } = useContext(AuthContext);
    const [users] = useUsers();
    const { classImage, className, price, seats, _id, totalStudent } = approvedCls;


    const findUser = users.find(us => us.email === user?.email)

    const handleSelectClass = () => {
        if (user && user.email) {
            setIsClassSelected(true);

            const selectClass = {
                classImage, className, email: user.email, instructorName, price, seats, classId: _id
            }

            fetch('https://a-dance-school-server.vercel.app/selectedClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setIsClassSelected(true)
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food Added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login First',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    };


    return (
        <div className={`card card-compact w-96 bg-base-100 text-blue-600 shadow-xl ${seats === 0 ? 'bg-red-600' : 'bg-base-100'}`}>
            <figure><img className='w-full h-[300px]' src={classImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p className='text-xl'>Available Seats : <span className='text-orange-700 text-2xl'>{seats}</span> </p>
                <p className='text-xl'>Price: <span className='text-orange-700 text-2xl'>$ {price}</span> </p>
                <p className='text-xl'>Total Stu: <span className='text-orange-700 text-2xl'>{totalStudent}</span> </p>
                <div className="card-actions justify-end">
                    {
                        findUser?.role === 'admin' || findUser?.role === 'instructor' ? (
                            <button disabled={true}>Select</button>
                        ) : (
                            <button
                                onClick={() => handleSelectClass(approvedCls)}
                                disabled={seats === 0 || isClassSelected}
                                className={`btn ${seats === 0 ? 'btn-disabled' : 'btn-primary'}`}
                            >
                                Select
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ShowClass;