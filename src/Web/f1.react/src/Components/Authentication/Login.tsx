import { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { AuthenticationContext } from './AuthenticationContext';

const Login = () => {

    const authenticationContext = useContext(AuthenticationContext);

    const [email, setEmail] = useState("dav@dav-evans.com");
    const [password, setPassword] = useState("1Mlm7sNaS2kW=z7rfB#");

    const onClick = async (event: any) => {
        event.preventDefault();
        await authenticationContext?.login({ username: email, password});
        console.log('logged in.');
    }

    return (
        <div>
            <h1>Login</h1>
            <div>
                User is {authenticationContext?.isAuthenticated ? "logged in" : "not logged in"}

                <form>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} required />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} required/>
                    </label>

                    <button onClick={onClick}>Sign In</button>
                </form>
            </div>

            <Link to="/register">Register</Link>
        </div>

    )
}

export default Login