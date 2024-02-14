import Navbar from "../layout/Navbar";
import Container from "../components/Container";
import SectionApp from "../components/SectionApp";
import Footer from "../layout/Footer"

import creditCarImg from "../assets/img/img-pages/card.png";
import logoClientImg from "../assets/img/logos/LogoClient.png";
import graphicImg from "../assets/img/img-pages/graphic.png";
import featureAnalitic from "../assets/img/img-pages/featureAnalitic.png";
import featureMove from "../assets/img/img-pages/featureMove.png";
import featureSend from "../assets/img/img-pages/featureSend.png";


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

                <SectionApp />

                <section className="section-analytics">
                    <h1>Na palma da sua mão.</h1>

                    <div className="section-analytics-wrapper">
                        <div className="section-container-left">
                            <img src={graphicImg} alt="graphic-img" />
                        </div>

                        <div className="section-container-right">
                            <div className="container-right-description">
                                <h1>Nosso compromisso com a inovação</h1>
                                <p>
                                    No mundo acelerado de hoje em dia, administar suas finanças sem nenhum tipo de tecnologia seria desgastante. 
                                    Diga adeus para as grandes filas e horas gastadas em bancos. Nosso aplicativo móvel, 
                                    de última geração está aqui para trasnformar a forma em que você interage e conhece a suas dívidas.
                                </p>
                            </div>

                            <div className="container-right-img">
                                <img src={featureAnalitic} alt="feature-analitic-img" />
                                <img src={featureMove} alt="feature-move-img" />
                                <img src={featureSend} alt="feature-send-img" />
                            </div>
                        </div>
                    </div>
 
                </section>

                <Footer />
                
            </main>
        </Container>
    );
};

export default Home