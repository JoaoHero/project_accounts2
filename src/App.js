import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// eslint-disable-next-line
import style from "./assets/css/style.css";

function App() {
  return (
    <div>
      <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<About />}></Route>
                <Route path="/login" element={<About />}></Route>
            </Routes>
      </Router>
    </div>
  );
}

export default App;
