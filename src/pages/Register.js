import Container from "../components/Container";
import Logo from "../components/Logo";
import Form from "../components/Form"
import FormImgDinamic from "../components/FormImg";

import { MdPerson } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import registerImg from "../assets/img/img-pages/transaction-img.jpg"

function Login() {
    return(
        <Container>
            <main className="register-main">
                <section className="register-img">
                    <div className="logo-home">
                        <a href="/"><Logo /></a>
                    </div>
                    
                    <img src={registerImg} alt="principal-img-login" />
                </section>

                <section className="register-form-wrapper">
                    <div className="register-form">

                        <div className="register-form-img">
                            <FormImgDinamic tittle="Vamos Começar!" phrase="Crie uma conta de graça."/>
                        </div>

                        <form action="" method="POST">
                            <Form name="name" type="text" placeholder="Nome completo" icon={<MdPerson />}/>
                            <Form name="cpf" type="number" placeholder="Informe seu CPF" icon={<FaAddressCard />}/>
                            <Form name="email" type="email" placeholder="Informe seu E-mail" icon={<MdOutlineMail />} />
                            <Form name="password" type="password" placeholder="Crie uma senha forte" icon={<CiLock />} />
                            <Form id="login-btn" name="btn" type="submit" value="Entrar" />

                            <span>Lembrou de sua conta ? <a href="/login">Entre já</a></span>
                        </form>



                    </div>
                </section>

            </main>
        </Container>
    );
};

export default Login;