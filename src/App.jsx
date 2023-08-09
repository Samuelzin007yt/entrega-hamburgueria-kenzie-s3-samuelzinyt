import { HomePage } from "./pages/HomePage";
import "./styles/index.scss";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <>
      <HomePage />
      <ToastContainer/>
    </>
  )
}

export default App
