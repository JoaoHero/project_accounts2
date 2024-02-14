import Navbar from "../layout/Navbar";
import Container from "../components/Container";

import creditCarImg from "../assets/img/img-pages/card.png";
import logoClientImg from "../assets/img/logos/LogoClient.png"

function Home() {
    return(
        <Container>
            <Navbar />

            <main className="main">
                <div className="container-left">
                    <div className="container-left-itens">
                        <h1 id="first-h1">Bem vindo ao</h1>
                        <h1 id="second-h1">futuro dos <br></br>Bancos</h1>

                        <div className="container-letft-description">
                            <p>Potencialize a sua experiência bancária, todas as suas operacões financeiras na palma da sua mão</p>
                        </div>

                        <button id="btn-description"><a href="/about">Mais informações</a></button>

                    </div>
                </div>

                <div className="container-right">
                    <img src={creditCarImg} alt="img-creditcar" />
                </div>

                <section className="clients">
                    <div className="clients-logo">
                        <img src={logoClientImg} alt="img-logo-client" />
                    </div>

                    <div className="clients-logo">
                        <img src={logoClientImg} alt="img-logo-client" />
                    </div>

                    <div className="clients-logo">
                        <img src={logoClientImg} alt="img-logo-client" />
                    </div>

                    <div className="clients-logo">
                        <img src={logoClientImg} alt="img-logo-client" />
                    </div>

                </section>
            </main>

        </Container>
    );
};

export default Home