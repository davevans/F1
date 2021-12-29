import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthenticationContext } from './AuthenticationContext';

const Login = () => {

    const authenticationContext = useContext(AuthenticationContext);

    const onClick = async (event: any) => {
        event.preventDefault();
        await authenticationContext?.login();
        console.log('logged in.');
    }

    return (
        <div>
            <h1>Login</h1>
            <div>
                User is {authenticationContext?.isAuthenticated ? "logged in" : "not logged in"}
                <div>
                    <button onClick={onClick}>Sign In</button>
                </div>
            </div>

            <Link to="/register">Register</Link>
        </div>

    )
}

export default Login