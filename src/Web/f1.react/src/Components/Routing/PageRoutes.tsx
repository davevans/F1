import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Authentication/Login"
import Register from "../Authentication/Register"
import Dashboard from "../Dashboard/Dashboard";
import { AuthenticationContext } from "../Authentication/AuthenticationContext";

let PageRoutes = () => {
    
    const authenticationContext = useContext(AuthenticationContext);

    useEffect(() => {
        authenticationContext?.getSession()
            .then(session => {
                 console.log("got session.");
            })
            .catch(err => {
                console.log("no session.");
            });
    }, [authenticationContext]);


    return authenticationContext?.isAuthenticated ? (
        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
    ) : (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Login />} />
        </Routes>
    );

}

export default PageRoutes

/*
    not-authenticated
    / => Authentication/Login
    /register => Authentication/Register

    authenticated
    / => Dashboard
*/