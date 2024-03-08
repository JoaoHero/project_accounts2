// Importando as regras de estilos
import styles from "../assets/css/components/popUp.module.css";
// Importando o service do popUp, conectando com a API
import popUpService from "../services/popUpService";
import { useState, useEffect } from "react";

// Component Logo
import Logo from "../components/Logo";
// Icone de seta, utilizando no btn
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

function PopUp({ type }) {

    // Obtendo os valores do e-mail
    const [depositValue, setDepositValue] = useState("");
    const [pixValue, setPixValue] = useState("");
    const [emailValue, setEmailValue] = useState("");

    // Função que coleta os valores do e-mail e atribui ao botão
    function handleSubmit(event, route, value, email="") {
        event.preventDefault();

        // Chamando a função do serviço Fetch conectando a API
        popUpService({ route, value, email });
    };

    // Controlando o valor do display do popUp
    const [display, setDisplay] = useState("flex");

    // Função para mudar o valor do display
    function popUpClose() {
        setDisplay("none");
    }

    // Controlando o estado do texto h1
    const [h1, setH1] = useState("");

    // Auxiliando no controle do estado do texto que será apresentado
    useEffect(() => {
        // Texto para o popUp de depósito
        if (type === "deposit") {
          setH1("Qual valor você quer depositar na sua conta?");
          // Texto para o popUp de pagamento
        } else if (type === "pay") {
          setH1("Informe o valor da fatura que você deseja pagar");
          // Texto para o popUp de empréstimo
        } else {
          setH1("Informe a quantia de dinheiro que deseja pegar emprestado");
        }
      }, [type]);

    // Construindo o layout do PopUP quando a requisição não for um pix
    if(type !== "pix") {

        return(
            <div className={styles.popUp_wrapper} style={{ display: display }}>

                <div className={styles.popUp_close}>
                    <button onClick={popUpClose}>X</button>
                </div>

                <div className={styles.popUp_logo}>
                    <Logo />
                </div>

                {/* Exibindo a mensagem de texto personalizada */}
                <h1>{h1}</h1>

                <form className={styles.form_container} onSubmit={(event) => handleSubmit(event, `/${type}`, depositValue)}>

                    <div className={styles.form_itens}>
                        <label htmlFor="depositValue">R$</label>
                        <input name="depositValue" type="number" placeholder="Informe o valor" onChange={(event) => setDepositValue(event.target.value)} />
                    </div>

                    <button className={styles.btn} type="submit"><HiOutlineArrowSmallRight /></button>
                </form>

            </div>
        );
    // Construindo o layout do PopUP quando a requisição for um pix
    }else {
        return(
                <div className={styles.popUp_wrapper} style={{ display: display }}>

                <div className={styles.popUp_close}>
                    <button onClick={popUpClose}>X</button>
                </div>

                <div className={styles.popUp_logo}>
                    <Logo />
                </div>

                <h1>Envie um pix de qualquer lugar a qualquer hora!</h1>

                <form className={styles.form_container} onSubmit={(event) => handleSubmit(event, "/pix", pixValue, emailValue)}>

                    <div className={styles.form_itens}>
                        <label htmlFor="pixValue">R$</label>
                        <input name="pixValue" type="number" placeholder="Informe o valor" onChange={(event) => setPixValue(event.target.value)} />

                        <label htmlFor="pixEmail">Email</label>
                        <input name="pixEmail" type="text" placeholder="Informe o e-mail" onChange={(event) => setEmailValue(event.target.value)} />
                    </div>

                    <button className={styles.btn} type="submit"><HiOutlineArrowSmallRight /></button>
                </form>

            </div>
        );
    };
};

export default PopUp;