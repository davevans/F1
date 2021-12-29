import PageRoutes from "./Routing/PageRoutes";
import { BrowserRouter } from "react-router-dom";
import AuthenticationProvider from "./Authentication/AuthenticationProvider";

const App = () => {

    return (
        <AuthenticationProvider>
            <BrowserRouter>
                <PageRoutes />    
            </BrowserRouter>
        </AuthenticationProvider>
    )

}

export default App