import React from 'react';
import useSelecedClass from '../../../hooks/useSelecedClass';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const MySelectedClasses = () => {
    const [selectedCls, refetch] = useSelecedClass();
    console.log(selectedCls);

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://a-dance-school-server.vercel.app/selected/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Del!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="w-full">
            <div className="uppercase font-semibold text-2xl flex justify-between items-center mb-5">
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedCls.map((slc, index) => <tr key={slc._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={slc.classImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {slc.className}
                                </td>
                                <td>$ {slc.price}</td>
                                <td>$ {slc.seats}</td>
                                <td className="">
                                    <Link to={`/dashboard/payment/${slc._id}`}><button  className="btn bg-black hover:bg-slate-700 text-white ">Pay</button></Link>
                                </td>
                                <td className="">
                                    <button onClick={() => handleDelete(slc)} className="btn text-white bg-red-600"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }

                        {/* row 2 */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;