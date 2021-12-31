import { useState } from 'react'
import  { AuthenticationContext, ILoginRequest } from "./AuthenticationContext"
import { CognitoUser, AuthenticationDetails, CognitoUserSession } from 'amazon-cognito-identity-js';
import UserPool from './UserPool';

const AuthenticationProvider = ({children}: { children:any}) => {

    
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = async (req: ILoginRequest) => {
        return await new Promise<CognitoUserSession>((res, rej) => {

            const user = new CognitoUser({
                Username: req.username,
                Pool: UserPool
            })
    
            const authDetails = new AuthenticationDetails({
                Username: req.username,
                Password: req.password
            });

            user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    setIsAuthenticated(true);
                    return res(data);
                },
                onFailure: (err) => rej(err)
            });

        });
    }

    const logout = async () => {
        return await new Promise<void>((res, rej) => {

            console.log('logging out.');
            setIsAuthenticated(false);
            return res();

        })
    }

    return (
        <AuthenticationContext.Provider value={{ isAuthenticated, login, logout}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationProvider