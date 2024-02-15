import Container from "../components/Container";
import Logo from "../components/Logo";
import Form from "../components/Form"
import FormImgDinamic from "../components/FormImg";

import { CiLock } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

function Login() {
    return(
        <Container>
            <main className="login-main">
                <section className="login-img">
                    <div className="login-logo">
                        <a href="/"><Logo /></a>
                    </div>
                    
                    <img src="https://www.datocms-assets.com/39397/1704720890-nu_core_login.png?h=1080" alt="principal-img-login" />
                </section>

                <section className="login-form-wrapper">
                    <div className="login-form">

                        <div className="login-form-img">
                            <FormImgDinamic tittle="Bem vindo de volta" phrase="Não perca tempo! Acesse sua conta."/>
                        </div>

                        <form action="" method="POST">
                            <Form name="email" type="email" placeholder="Digite o seu E-mail" icon={<MdOutlineMail />} />
                            <Form name="password" type="password" placeholder="Digite sua senha" icon={<CiLock />} />

                            <div className="login-form-options">
                                <a href="/recoveryAccount">Esqueceu a senha ?</a>
                            </div>

                            <Form id="login-btn" name="btn" type="submit" value="Entrar" />

                            <span>Novo membro? <a href="/register">Cadastre-se agora</a></span>
                        </form>



                    </div>
                </section>

            </main>
        </Container>
    );
};

export default Login;