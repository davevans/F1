import { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { AuthenticationContext } from './AuthenticationContext';

const Login = () => {
    let navigate = useNavigate();
    const authenticationContext = useContext(AuthenticationContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onClick = async (event: any) => {
        event.preventDefault();
        authenticationContext?.login({ username: email, password})
            .then(_ => {
                console.log('logged in.');
                navigate("/");
            })
            .catch(err => {
                console.log('loggin failed');
            })
    }

    return (
        <div>
            <h1>Login</h1>
            <div>
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