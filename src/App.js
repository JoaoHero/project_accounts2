import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ConfirmEmail from "./pages/ConfirmEmail";
import UserTransactions from "./pages/UserTransactions";


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element=""></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/confirm-email" element={<ConfirmEmail />}></Route>
                <Route path="/userTransactions" element={<UserTransactions />}></Route>
            </Routes>
      </Router>

      <ToastContainer />
    </div>
  );
};

export default App;
