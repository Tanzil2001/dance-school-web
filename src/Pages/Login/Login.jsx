import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-black p-44'>
            <div className='bg-blue-300 mt-6 text-white'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minima non cumque maiores aperiam voluptatem dolor. Vel consequuntur minus voluptatibus, ratione ducimus blanditiis quibusdam. Ratione voluptate quod vitae nobis non?</p>
            </div>
            <Link className='text-white' to="/signup">Register</Link>
        </div>
    );
};

export default Login;