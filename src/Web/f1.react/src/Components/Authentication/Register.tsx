import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import React, { useState } from 'react'
import UserPool from './UserPool'

const Register = () => {

    const [email, setEmail] = useState("dav@dav-evans.com");
    const [password, setPassword] = useState("1Mlm7sNaS2kW=z7rfB#");
    const [phone, setPhone] = useState("+610404583336");
  
    const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        console.log(`username: ${email} password: ${password}.`);

        let cognitoUserAttributes: CognitoUserAttribute[] = [];
        cognitoUserAttributes.push(new CognitoUserAttribute({ Name: "phone_number", Value: phone}));
        cognitoUserAttributes.push(new CognitoUserAttribute({ Name: "email", Value: email}));

        let validationData: CognitoUserAttribute[] = [];
        
        // invoke AWS Cognito API to signup user.
        UserPool.signUp(email, password, cognitoUserAttributes, validationData , (err, data) => {

            if(err){
                console.error(err);
            }
            console.log(data);

        });
    }

    return (
        <div>
            <h1>Register</h1>

            <form onSubmit={onSubmit}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} required />
                </label>

                <label>
                    Phone:
                    <input type="text" value={phone} onChange={(e) => setPhone(e.currentTarget.value)} required />
                </label>

                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} required/>
                </label>

                <input type="submit" value="Register"/>
            </form>
        </div>
    )
}

export default Register