// Importando as regras de estilos e os hooks
import styles from "../assets/css/layout/navbar/navbar.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Importando os components
import Logo from "../components/Logo";
import Container from "../components/Container";

// Importando as imagens do React Icons
import { FaHome, FaBullhorn, FaComment, FaUserCircle } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";


function Navbar() {

    // Controlando o estado do display
    const [display, setDisplay] = useState("none");

    // Função para controlar o estado do menu quando clicado
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

                {/* Alterando o display conforme o estado */}
                <div className={styles.navbar_itens} style={{ display: display ? "none" : "block"  }}>
                    <ul>
                        <li><Link to="/"><FaHome />Home</Link></li>
                        <li><Link><FaBullhorn />Sobre</Link></li>
                        <li><Link><FaComment />Contato</Link></li>
                        <li><Link to="/login"><FaUserCircle />Entrar</Link></li>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;