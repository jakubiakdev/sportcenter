import React, { useContext, useEffect } from 'react';
import { LoginContext } from '../LoginContext';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Login() {
    const { loggedIn, login, logout } = useContext(LoginContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(searchParams.get("returnTo") && loggedIn) {
            setSearchParams({returnTo: null});
            navigate(searchParams.get("returnTo"));
        }
    }, [searchParams, setSearchParams, navigate, loggedIn]);

    return (
        <div className='text-center p-5'>
            <p className='text-xl'>You are {loggedIn ? '' : 'not'} logged in.</p>
            {loggedIn ?
                <button
                    onClick={logout}
                    className='bg-red-300 p-2 m-2 rounded-lg shadow-md'
                >
                    Log out
                </button>
                :
                <button
                    onClick={login}
                    className='bg-green-300 p-2 m-2 rounded-lg shadow-md'
                >
                    Log in
                </button>
            }

        </div>
    );
}