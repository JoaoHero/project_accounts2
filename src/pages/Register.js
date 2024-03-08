// Importando as regras de estilos e os hooks
import styles from "../assets/css/pages/register/register.module.css";
import { useState } from "react";

// Importando os components
import Container from "../components/Container";
import Logo from "../components/Logo";
import Form from "../components/Form"
import FormImgDinamic from "../components/FormImg";
import registerService from "../services/registerService"


// Importando as imagens do React Icons
import { MdPerson } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import registerImg from "../assets/img/img-pages/transaction-img.jpg";


function Register() {

    // Controlando o estado dos inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");

    // Função que coleta os valores do input e atribui ao botão
    function handleSubmit(event) {
        event.preventDefault();

        // Parando o processamento, chamando a função do serviço Fetch conectando a API
        return registerService({ name, email, cpf, password });
    };

    return(
        <Container>
            <main className={styles.register_main}>
                <section className={styles.register_img}>
                    <div className={styles.logo_home}>
                        <a href="/"><Logo /></a>
                    </div>
                    
                    <img src={registerImg} alt="principal-img-login" />
                </section>

                <section className={styles.register_form_wrapper}>
                    <div className={styles.register_form}>

                        <div className={styles.register_form_img}>
                            <FormImgDinamic tittle="Vamos Começar!" phrase="Crie uma conta de graça."/>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <Form name="name" type="text" placeholder="Nome completo" onChange={(event) => setName(event.target.value)} icon={<MdPerson />} />
                            <Form name="email" type="email" placeholder="Informe seu E-mail" onChange={(event) => setEmail(event.target.value)} icon={<MdOutlineMail />} />
                            <Form name="cpf" type="text" placeholder="Informe seu CPF" onChange={(event) => setCpf(event.target.value)} icon={<FaAddressCard />}/>
                            <Form name="password" type="password" placeholder="Crie uma senha forte" onChange={(event) => setPassword(event.target.value)} icon={<CiLock />} />
                            
                            <input id={styles.register_btn} name="btn" type="submit" value="Cadastrar" />

                            <span>Lembrou de sua conta ? <a href="/login">Entre já</a></span>
                        </form>
                        
                    </div>
                </section>

            </main>
        </Container>
    );
};

export default Register;