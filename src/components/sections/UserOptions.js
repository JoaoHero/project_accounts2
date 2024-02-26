import styles from "../../assets/css/components/userOptions.module.css";

import { FaRegUser } from "react-icons/fa6";

function UserOptions() {
    return(
            <section className={styles.user_options}>
                <div className={styles.user_info}>

                    <div className={styles.user_photo}>
                        <FaRegUser />
                    </div>

                    <div className={styles.user_name}>
                        <p>Olá, usuário</p>
                    </div>
                </div>

                <div className={styles.user_options_itens}>
                    <div className={styles.user_itens_tittle}>
                        <svg viewBox="0 0 24 24" focusable="false"><title>arrows_up_down</title><path d="M5.01042 1.51116C5.55715 0.964421 6.44358 0.964421 6.99032 1.51116L11.4006 5.92141V9.88121L7.40012 5.88076V15.9011H4.60012V5.88125L0.600159 9.88121V5.92141L5.01042 1.51116Z" fill="currentColor"></path><path d="M18.9897 22.4895C18.4429 23.0362 17.5565 23.0362 17.0098 22.4895L12.5998 18.0795V14.1197L16.6002 18.1201V8.09954H19.4002V18.1192L23.4001 14.1193V18.0791L18.9897 22.4895Z" fill="currentColor" ></path></svg>
                        <a href="/UserAccount">Transações</a>
                    </div>

                    <div className={styles.user_itens_subTittle}>
                        <a href="/">Cartão de crédito</a>
                    </div>

                    <div className={styles.user_itens_itens}>
                        <svg viewBox="0 0 24 24" focusable="false"><title>list</title><path d="M5 7H3V9H5V7Z" fill="currentColor" ></path><path d="M5 11H3V13H5V11Z" fill="currentColor" ></path><path d="M3 15H5V17H3V15Z" fill="currentColor" ></path><path d="M21 11H7V13H21V11Z" fill="currentColor" ></path><path d="M7 7H21V9H7V7Z" fill="currentColor" ></path><path d="M21 15H7V17H21V15Z" fill="currentColor" ></path></svg>
                        <a href="/UserFactures">Resumo de faturas</a>
                    </div>

                    <div className={styles.user_itens_itens}>
                        <svg viewBox="0 0 24 24" focusable="false"><title>card_stack</title><path d="M15.875 8.85V6H14V8.85H15.875Z" fill="currentColor" ></path><path d="M17 1C19.2091 1 21 2.79086 21 5V15C21 17.2091 19.2091 19 17 19H11C8.79086 19 7 17.2091 7 15L7 5C7 2.79086 8.79086 1 11 1L17 1ZM19 5C19 3.89543 18.1046 3 17 3L11 3C9.89543 3 9 3.89543 9 5L9 15C9 16.1046 9.89543 17 11 17H17C18.1046 17 19 16.1046 19 15V5Z" fill="currentColor" ></path><path d="M16.3029 21C15.5249 22.2035 14.1712 23 12.6316 23H8C5.23858 23 3 20.7614 3 18L3 9.19998C3 7.68703 3.79997 6.36093 5 5.62158L5 18C5 19.6568 6.34315 21 8 21L16.3029 21Z" fill="currentColor" ></path></svg>
                        <a href="/">Meus cartões</a>
                    </div>
                </div>

                <div className={styles.logOut}>

                    <div className={styles.logOut_itens}>
                    <svg viewBox="0 0 24 24" focusable="false" ><title>help</title><path d="M13 8.26795C12.6187 8.04782 12.1755 7.95965 11.739 8.01711C11.3025 8.07458 10.8971 8.27447 10.5858 8.58579C10.2745 8.89711 10.0746 9.30245 10.0171 9.73895C9.99093 9.93785 9.99498 10.1381 10.028 10.3333L8.05595 10.6667C7.98996 10.2763 7.98186 9.87567 8.03422 9.4779C8.14916 8.6049 8.54894 7.79421 9.17158 7.17158C9.79421 6.54894 10.6049 6.14916 11.4779 6.03422C12.3509 5.91929 13.2374 6.09563 14 6.5359C14.7626 6.97617 15.3586 7.65576 15.6955 8.46927C16.0325 9.28278 16.0916 10.1847 15.8637 11.0353C15.6358 11.8858 15.1336 12.6374 14.435 13.1734C14.0123 13.4978 13.6358 13.8134 13.3654 14.1449C13.099 14.4713 13 14.7347 13 14.9635V15H11V14.9635C11 14.1079 11.384 13.4096 11.8157 12.8805C12.2433 12.3564 12.7799 11.9225 13.2175 11.5867C13.5668 11.3187 13.8179 10.9429 13.9319 10.5176C14.0458 10.0924 14.0162 9.64139 13.8478 9.23464C13.6793 8.82788 13.3813 8.48809 13 8.26795Z" fill="currentColor" ></path><path d="M13 18V16H11V18H13Z" fill="currentColor" ></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z" fill="currentColor" ></path></svg>
                        <a href="/">Ajuda</a>
                    </div>

                    <div className={styles.logOut_itens}>
                        <svg viewBox="0 0 24 24" focusable="false" ><title>arrow_left</title><path d="M12 4L13.41 5.41L7.83 11L20 11L20 13L7.83 13L13.41 18.59L12 20L4.7071 12.7071C4.31658 12.3166 4.31658 11.6834 4.70711 11.2929L12 4Z" fill="currentColor" ></path></svg>
                        <a href="/">Sair</a>
                    </div>
                </div>
        </section>
    );
};

export default UserOptions;