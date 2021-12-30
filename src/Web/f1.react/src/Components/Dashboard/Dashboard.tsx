import React, { useContext } from "react"
import { AuthenticationContext } from "../Authentication/AuthenticationContext"

const Dashboard = () => {

    var authContext = useContext(AuthenticationContext);

    return (
        <>
        <h1>Dashboard</h1>
        <p>
            yo
        </p>
        </>
    );
}

export default Dashboard;

