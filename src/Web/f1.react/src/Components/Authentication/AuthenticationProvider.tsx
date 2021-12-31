import { useState } from "react";
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
        return await new Promise<void>((res, _) => {

            console.log('logging out.');
            const user = UserPool.getCurrentUser() ;
            if(user)
            {
                user.signOut();
                setIsAuthenticated(false);
            }
            return res();
        })
    }

    const getSession = async () => {
        return await new Promise<CognitoUserSession>((res, rej) => {
            const loggedInUser = UserPool.getCurrentUser();
            if(loggedInUser)
            {
                loggedInUser.getSession((err: Error | null, session: CognitoUserSession | null) => {
                    if(err)
                    { 
                        setIsAuthenticated(false);
                        rej();
                        return;
                    }

                    if(session)
                    {
                        setIsAuthenticated(true);
                        res(session);
                    }
                })
            }else{
                setIsAuthenticated(false);
                rej();
            }
        });
    }

    return (
        <AuthenticationContext.Provider value={{ isAuthenticated, login, logout, getSession}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationProvider