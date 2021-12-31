import { CognitoUserSession } from 'amazon-cognito-identity-js';
import React from 'react'

export interface ILoginRequest {
    username: string,
    password: string
}

export interface IAuthenticationContext {
    isAuthenticated: boolean;
    login:(request: ILoginRequest) => Promise<CognitoUserSession>;
    logout:() => Promise<void>;
    getSession: () => Promise<CognitoUserSession>;
}
  
export const AuthenticationContext = React.createContext<IAuthenticationContext | null>(null);

