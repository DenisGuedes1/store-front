import { ToastContainer } from "react-toastify";
import { RoutesMain as Routes } from "./routes/routes";


const App = ()=> { 

  return (
    <>
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
      <Routes/>
    </>
  )
}

export default App
