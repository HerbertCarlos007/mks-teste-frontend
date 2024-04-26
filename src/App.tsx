import { ToastContainer } from "react-toastify";
import "./App.css";
import { GlobalStyle } from "./globalStyles";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <ToastContainer/>
      <GlobalStyle />
      <Home/>
    </>
  );
}

export default App;
