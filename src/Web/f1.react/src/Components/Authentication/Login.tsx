import { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { AuthenticationContext } from './AuthenticationContext';
import { Form, Input, Button } from 'antd';

const Login = () => {
    let navigate = useNavigate();
    const authenticationContext = useContext(AuthenticationContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const onFinish = (values: any) => {
        authenticationContext?.login({ username: values.email, password: values.password})
            .then(_ => {
                console.log('logged in.');
                navigate("/");
            })
            .catch(err => {
                console.log('loggin failed');
            })
    }

    return (
        <div id="loginContainer">
            <div id="login">
                <h1>Login</h1>
                <Form 
                onFinish={onFinish}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                
                initialValues={{ remember: true }} autoComplete="off">
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email' }]}>
                        <Input value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password' }]}>
                        <Input.Password value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">Login</Button>
                    </Form.Item>
                </Form>  
            </div>
        </div>
    )
}

export default Login