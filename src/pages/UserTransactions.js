// Importando as regras de estilos e os hooks
import styles from "../assets/css/pages/userAccount/userTransactions.module.css";
import { useState, useEffect } from "react";

// Impotando os components
import Container from "../components/Container";
import UserOptions from "../components/sections/UserOptions";
import UserAccountTittle from "../components/sections/UserAccountTittle";
import userTransactionsService from "../services/userTransactionsService";
import PopUp from "../components/PopUp";

// Importando as imagens do React Icons
import { RiLuggageDepositFill } from "react-icons/ri";
import { SiPix } from "react-icons/si";
import { CiBarcode } from "react-icons/ci";
import { FaMoneyCheckAlt } from "react-icons/fa";


function UserTransactions() {
    // Controlando o estado do saldo do usuário
    const [balance, setBalance] = useState(null);
    // Controlando o estado do nome do usuário
    const [name, setName] = useState(null);

    useEffect(() => {
        // Atribuindo o nome do usuário salvo no localStorage a uma variável
        const name  = localStorage.getItem("name");
        // Atribuindo o valor da variável ao state
        setName(name);

        // Fazendo a chamada na API
        const fetchData = async () => {
            try {
                // Aguardando os dados recuperados da API
                const dataFromAPI = await userTransactionsService();

                // Atribuindo o saldo do usuário buscado no servidor à uma variável
                const { balance } = dataFromAPI

                // Atribuindo o valor da variável ao state
                setBalance(balance);

            } catch (error) {
                // Parando o processamento e informando o erro
                return console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchData(); // Chama a função de serviço quando o componente é montado

    }, []);

    // Controlando o estado do popUp
    const [popUpShow, setPopUpShow] = useState(false);
    // Controlando o estado do tipo do popUp
    const [popUpType, setPopUpType] = useState();

    // Função para controlar o estado do popUp quando clicado
    function handleClick(divName) {
        // Alterando o estado do popUp
        setPopUpShow(!popUpShow);

        // Atribuindo o valor do argumento ao state
        setPopUpType(divName)
    };

    return(
        <Container>
            <main className={styles.main}>

                <div className={styles.container_left}>
                    <UserOptions name={name} />
                </div>
                <div className={styles.container_right}>
                    <UserAccountTittle sectionTittle="transactions" tittle="Inicio" />

                    <section className={styles.account_ballance}>

                        <div className={styles.account_ballance_wrapper}>
                            <div className={styles.account_ballance_tittle}>
                                <h1>Conta</h1>
                            </div>

                            <div className={styles.account_ballance_value}>
                                <p>Saldo Disponível</p>
                                {/* Mostrando o saldo do usuário na tela */}
                                <p>R$ {balance}</p>
                            </div>
                        </div>

                    </section>

                    <section className={styles.account_user_services}>
                        <div className={styles.account_user_tittle}>
                            <h1>Seus Serviços</h1>
                        </div>

                        <div className={styles.account_user_itens_wrapper}>

                            <div className={styles.account_user_itens} onClick={() => handleClick("deposit")}>
                                <RiLuggageDepositFill />
                                <p>Depósito</p>
                            </div>

                            <div className={styles.account_user_itens} onClick={() => handleClick("pix")}>
                                <SiPix />
                                <p>Pix</p>
                            </div>

                            <div className={styles.account_user_itens} onClick={() => handleClick("pay")}>
                                <CiBarcode />
                                <p>Pagar</p>
                            </div>

                            <div className={styles.account_user_itens} onClick={() => handleClick("loan")}>
                                <FaMoneyCheckAlt />
                                <p>Empréstimo</p>
                            </div>

                            {/* Caso o valor do popUp seja verdadeiro, buscar o tipo e montar o componente na tela */}
                            {popUpShow && <PopUp type={popUpType} />}
                        </div>

                    </section>

                    <section className={styles.more_services}>

                        <div className={styles.more_services_tittle}>
                            <h1>Ainda mais para você</h1>
                        </div>

                        <div className={styles.more_services_wrapper}>

                            <div className={styles.more_services_itens}>
                                <img src="https://www.datocms-assets.com/39397/1683920216-nubank_hickduarte_53276.jpg" alt="Homem falando no celular" />
                                
                                <div className={styles.services_itens_description}>
                                    <h1>Contato</h1>
                                    <p>Precisando resolver alguma coisa, entre em contato!</p>
                                </div>
                            </div>

                            <div className={styles.more_services_itens}>
                                <img src="https://www.datocms-assets.com/39397/1674053064-nubank_hickduarte_58741_md.jpg" alt="Mulher olhando o celular" />
                                
                                <div className={styles.services_itens_description}>
                                    <h1>Perguntas</h1>
                                    <p>Dúvidas? Todas as respostas em um só lugar</p>
                                </div>
                            </div>

                            <div className={styles.more_services_itens}>
                                <img src="https://www.datocms-assets.com/39397/1650480409-man-sitting-with-phone-md-3x.jpg?q=40" alt="Homem sentado olhando o celular" />
                            
                                <div className={styles.services_itens_description}>
                                    <h1>Segurança</h1>
                                    <p>Dicas para se manter seguro navegando</p>
                                </div>
                            </div>

                            <div className={styles.more_services_itens}>
                                <img src="https://www.datocms-assets.com/39397/1683920285-nubank_hickduarte_55620.png" alt="Duas pessoas conversando" />
                            
                                <div className={styles.services_itens_description}>
                                    <h1>Blog</h1>
                                    <p>Venha nos acompanhar nas redes sociais</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

        </Container>
    );
};

export default UserTransactions;