import styles from "../assets/css/pages/confirmEmail/confirmEmail.module.css";
import Container from "../components/Container";
import Logo from "../components/Logo";
import Form from "../components/Form";
import loginService from "../services/loginService";
import { useState } from "react";

import companyImg from "../assets/img/img-pages/companyImg.jpg";
import confirmEmailImg from "../assets/img/img-pages/confirmEmailImg.png";

function ConfirmEmail() {
    return(
        <Container>
            <main className={styles.main}>
                <section className={styles.img}>
                    <div className={styles.logo}>
                        <a href="/"><Logo /></a>
                    </div>
                    
                    <img src={companyImg} alt="principal-img-validationCode" />
                </section>

                <section className={styles.form_wrapper}>
                    <div className={styles.form}>

                        <div className={styles.form_img}>
                            <img src={confirmEmailImg} alt="confirm-email-img" />
                        </div>

                        <div className={styles.form_description}>
                            <h1>Estamos quase lá</h1>
                            <p>Por favor, informe o código de segurança enviado para o seu email</p>
                        </div>

                        <form >
                            <Form name="code" type="code" placeholder="Informe o código de 9 digitos" />

                            <input id={styles.btn} name="btn" type="submit" value="Validar" />
                        </form>

                        <div className={styles.options}>
                            <p>Não recebeu o código? <a href="/register">enviar novamente</a></p>
                        </div>
                        

                    </div>

                </section>

            </main>
        </Container>
    );
};

export default ConfirmEmail;