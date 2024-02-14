import React, { useState } from "react";
import { Link } from "react-router-dom"
import Logo from "../components/Logo";
import Container from "../components/Container";
import { FaHome, FaBullhorn, FaComment, FaUserCircle } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

// eslint-disable-next-line
import navbarCss from "../assets/css/layout/navbar.css";

function Navbar() {

    const [display, setDisplay] = useState("none");

    const handleClick = () => {
        // Quando o elemento A for clicado, altere o estilo de exibição de B
        setDisplay(!display);
      };

    return(
        <Container>
            <div className="navbar">
                <div className="logo">
                    <Link to="/"><Logo /></Link>
                </div>

                <div className="navbar-mobile" onClick={handleClick}>
                    <IoMenuSharp />
                </div>

                <div className="navbar-itens" style={{ display: display ? "none" : "block"  }}>
                    <ul>
                        <li><Link to="/"><FaHome />Home</Link></li>
                        <li><Link to="/about"><FaBullhorn />Sobre</Link></li>
                        <li><Link to="/contact"><FaComment />Contato</Link></li>
                        <li><Link to="/login"><FaUserCircle />Entrar</Link></li>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default Navbar