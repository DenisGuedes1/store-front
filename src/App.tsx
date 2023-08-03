import { ToastContainer } from "react-toastify";
import { RoutesMain as Routes } from "./routes/routes";
import { GlobalStyles } from "./styles/globalstyles";
import { UserProvider } from "./Contexts/UserContext";
import { ProductsProvider } from "./Contexts/ProductsContexts";

const App = () => {
    return (
        <>
            <GlobalStyles />
            <UserProvider>
                <ProductsProvider>
                    <Routes />
                </ProductsProvider>
            </UserProvider>

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
