import React, { useState } from 'react'
import  { AuthenticationContext } from "./AuthenticationContext"

const AuthenticationProvider = ({children}: { children:any}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = async () => {
        console.log('logging in.');
        setIsAuthenticated(true);
    }

    const logout = async () => {
        console.log('logging out.');
        setIsAuthenticated(false);
    }

    return (
        <AuthenticationContext.Provider value={{ isAuthenticated, login, logout}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationProvider