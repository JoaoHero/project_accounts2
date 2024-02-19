import React, { useState } from "react";
import { Link } from "react-router-dom"
import styles from "../assets/css/layout/navbar/navbar.module.css";

import Logo from "../components/Logo";
import Container from "../components/Container";

import { FaHome, FaBullhorn, FaComment, FaUserCircle } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";


function Navbar() {

    const [display, setDisplay] = useState("none");

    const handleClick = () => {
        // Quando o elemento A for clicado, altere o estilo de exibição de B
        setDisplay(!display);
      };

    return(
        <Container>
            <div className={styles.navbar}>
                <div className="logo">
                    <Link to="/"><Logo /></Link>
                </div>

                <div className={styles.navbar_mobile} onClick={handleClick}>
                    <IoMenuSharp />
                </div>

                <div className={styles.navbar_itens} style={{ display: display ? "none" : "block"  }}>
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