import {useContext, useEffect } from 'react';
import { LoginContext } from '../LoginContext';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ProtectedPage({children}) {
    const { loggedIn } = useContext(LoginContext);
    let location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (!loggedIn) {
            setTimeout(() => {
                navigate(`/login?returnTo=${location.pathname}`);
            }, 5000); // this WILL break
        }
    }, [loggedIn, navigate, location.pathname]);
    if (!loggedIn) {
        return (
            <div className='text-center p-5'>
                <p className='text-3xl'>This action requires you to log in.</p>
                <p className='text-2xl'>You will be transferred there shortly.</p>
            </div>
        )
    }
    return children
}