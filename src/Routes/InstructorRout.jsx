import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation } from 'react-router-dom';
import useInstructor from '../hooks/useInstructor';

const InstructorRout = () => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};


export default InstructorRout;