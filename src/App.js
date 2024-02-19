import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login"
import Register from "./pages/Register"

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
            </Routes>
      </Router>
    </div>
  );
};

export default App;
