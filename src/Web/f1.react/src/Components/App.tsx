import { useEffect, useContext } from "react";
import PageRoutes from "./Routing/PageRoutes";
import { BrowserRouter } from "react-router-dom";
import AuthenticationProvider from "./Authentication/AuthenticationProvider";
import { AuthenticationContext } from "./Authentication/AuthenticationContext";

const App = () => {

    const authenticationContext = useContext(AuthenticationContext);

    useEffect(() => {
        if(authenticationContext?.isAuthenticated !== undefined)
        {
            console.log(`isAuthentiacted has changed. value is ${authenticationContext?.isAuthenticated}.`);
        }
        console.log("useEffect running...")
    }, [authenticationContext?.isAuthenticated])

    return (
        <AuthenticationProvider>
            <BrowserRouter>
                <PageRoutes />    
            </BrowserRouter>
        </AuthenticationProvider>
    )

}

export default App