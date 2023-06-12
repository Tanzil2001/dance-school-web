import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useLoaderData } from 'react-router-dom';

const UpdateClass = () => {
    const [axiosSecure] =useAxiosSecure();
    const updateData = useLoaderData();
    console.log(updateData);

    const handleUpdateClass =(e) =>{
        e.preventDefault();
        const price = e.target.price.value;
        const seats = e.target.seats.value;
        const  updateClass = {price, seats};
        console.log(updateClass);

        axiosSecure.patch(`/updateClass/${updateData._id}`,
            updateClass
        )
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount){
                alert('Updated Successful')
            }
        })
    };

    return (
        <div>
            <form onSubmit={handleUpdateClass} >
                <input type="number" defaultValue={updateData.price} name="price" placeholder='price' required />
                <input type="number" defaultValue={updateData.seats} name="seats" placeholder='seats' required />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UpdateClass;