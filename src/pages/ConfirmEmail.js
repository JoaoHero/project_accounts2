import styles from "../assets/css/pages/confirmEmail/confirmEmail.module.css";
import Container from "../components/Container";
import Logo from "../components/Logo";
import Form from "../components/Form";

import confirmEmailService from "../services/confirmEmailService";
import { useState } from "react";

import companyImg from "../assets/img/img-pages/company.jpg";
import drawImg from "../assets/img/img-pages/drawImg.png";

function ConfirmEmail() {

    const [emailCode, setEmailCode] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        confirmEmailService({ emailCode })
    };

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
                            <img src={drawImg} alt="confirm-email-img" />
                        </div>

                        <div className={styles.form_description}>
                            <h1>Estamos quase lá</h1>
                            <p>Por favor, informe o código de segurança enviado para o seu email</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <Form name="emailCode" type="code" placeholder="Informe o código de 9 digitos" onChange={(event) => setEmailCode(event.target.value)}/>

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