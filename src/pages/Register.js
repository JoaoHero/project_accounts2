import Container from "../components/Container";
import Logo from "../components/Logo";
import Form from "../components/Form"
import FormImgDinamic from "../components/FormImg";
import registerUser from "../services/registerService";
import { useState } from "react";

import { MdPerson } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import registerImg from "../assets/img/img-pages/transaction-img.jpg"

function Login() {

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit  = (event) => {
        event.preventDefault();

        registerUser({ name, email, cpf, password }); // Chame a função do serviço de registro com os dados do formulário
    }

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

                        <form onSubmit={handleSubmit}>
                            <Form name="name" type="text" placeholder="Nome completo" onChange={(event) => setName(event.target.value)} icon={<MdPerson />} />
                            <Form name="email" type="email" placeholder="Informe seu E-mail" onChange={(event) => setEmail(event.target.value)} icon={<MdOutlineMail />} />
                            <Form name="cpf" type="text" placeholder="Informe seu CPF" onChange={(event) => setCpf(event.target.value)} icon={<FaAddressCard />}/>
                            <Form name="password" type="password" placeholder="Crie uma senha forte" onChange={(event) => setPassword(event.target.value)} icon={<CiLock />} />
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