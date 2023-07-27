import { ToastContainer } from "react-toastify";
import { RoutesMain as Routes } from "./routes/routes";
import { GlobalStyles } from "./styles/globalstyles";
import { AuthProvider } from "./Contexts/UserContext";

const App = () => {
    return (
        <>
            <GlobalStyles />
            <AuthProvider>
                <Routes />
            </AuthProvider>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default App;
