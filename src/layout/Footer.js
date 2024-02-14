import Logo from "../components/Logo";

// eslint-disable-next-line
import footerCss from "../assets/css/layout/footer.css";

function Footer() {
    return(
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="logo-footer">
                    <Logo id="logo" />
                </div>

                <div className="footer-links">
                    <div>
                        <h2>Suporte</h2>
                        <ul>

                            <li><a href="/about">Preço/plano</a></li>
                            <li><a href="/about">Documentação</a></li>
                            <li><a href="/about">Guia</a></li>
                            <li><a href="/about">Tutorial</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2>Empresa</h2>
                        <ul>
                            <li><a href="/about">Sobre nós</a></li>
                            <li><a href="/about">Blog</a></li>
                            <li><a href="/about">Junte-se a nós</a></li>
                            <li><a href="/about">Parceiros</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2>Direitos</h2>
                        <ul>
                            <li><a href="/about">Licença</a></li>
                            <li><a href="/about">Privacidade</a></li>
                            <li><a href="/about">Termos</a></li>
                            <li><a href="/about">Jurídico</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2>Social</h2>
                        <ul>
                            <li><a href="/about">Facebook</a></li>
                            <li><a href="/about">Instagram</a></li>
                            <li><a href="/about">Twitter</a></li>
                            <li><a href="/about">Linkedin</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <p>© 2023 Todos os direitos reservados</p>
            </div>
        </footer>
    );
};

export default Footer;