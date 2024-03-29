// Importando as regras de estilos e os hooks
import styles from "../assets/css/pages/login/login.module.css";
import { useState } from "react";

// Importando os components
import Container from "../components/Container";
import Logo from "../components/Logo";
import Form from "../components/Form";
import FormImgDinamic from "../components/FormImg";
import loginService from "../services/loginService";


// Importando as imagens do React Icons
import { CiLock } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

function Login() {

    // Controlando o estado dos inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Função que coleta os valores do input e atribui ao botão
    function handleSubmit(event) {
        event.preventDefault();

        // Parando o processamento, chamando a função do serviço Fetch conectando a API
        return loginService({ email, password})
    };

    return(
        <Container>
            <main className={styles.login_main}>
                <section className={styles.login_img}>
                    <div className={styles.logo_home}>
                        <a href="/"><Logo /></a>
                    </div>
                    
                    <img src="https://www.datocms-assets.com/39397/1704720890-nu_core_login.png?h=1080" alt="principal-img-login" />
                </section>

                <section className={styles.login_form_wrapper}>
                    <div className={styles.login_form}>

                        <div className={styles.login_form_img}>
                            <FormImgDinamic tittle="Bem vindo de volta" phrase="Não perca tempo! Acesse sua conta."/>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <Form name="email" type="email" placeholder="Digite o seu E-mail" onChange={event => setEmail(event.target.value)} icon={<MdOutlineMail />} />
                            <Form name="password" type="password" placeholder="Digite sua senha" onChange={event => setPassword(event.target.value)} icon={<CiLock />} />

                            <div className={styles.login_form_options}>
                                <a href="/recoveryAccount">Esqueceu a senha ?</a>
                            </div>

                            <input id={styles.login_btn} name="btn" type="submit" value="Entrar" />

                            <span>Novo membro? <a href="/register">Cadastre-se agora</a></span>
                        </form>
                    </div>

                </section>

            </main>
        </Container>
    );
};

export default Login;