import React from 'react'

export interface IAuthenticationContext {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}
  
export const AuthenticationContext = React.createContext<IAuthenticationContext | null>(null);