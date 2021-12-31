import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../Authentication/AuthenticationContext"

const Dashboard = () => {
    let navigate = useNavigate();
    var authContext = useContext(AuthenticationContext);

    const onLogoutClick = (_: any) => {
        authContext?.logout();
        navigate("/");
    }

    return (
        <>
        <h1>Dashboard</h1>
        <div>
            <button onClick={onLogoutClick}>logout</button>
        </div>
        </>
    );
}

export default Dashboard;

