import Toast from "../components/Toast";

function loginService({ email, password }) {

    // Criando um objeto com os dados do usuário
    const user = {
        email: email,
        password: password
    };

    // Criando a chamada fetch
    fetch("191.252.191.239:8080/login", {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(user),
    }).then((response) => response.json()).then((jsonBody) => {
        // Atribuindo o erro informado do servidor a uma variável
        const error = jsonBody.error;
        // Atribuindo a mensagem informada pelo servidor a uma variável
        const message = jsonBody.message;
        // Atribuindo o nome do usuário informado pelo servidor a uma variável
        const userName = jsonBody.name;

        // Validando o status do erro informado
        if(error) {
            // Parando o processamento, retornando o status de erro e exibindo a mensagem ao usuário
            return Toast({ error: true, message });
        }else {
            // Atribuindo o token do usuário informado pelo servidor a uma variável
            const token = jsonBody.token;
            // Armazenar o token no localStorage
            localStorage.setItem('token', token);
            // Armazenar o nome do usuário no localStorage
            localStorage.setItem('name', userName);

            // Não retornando o status de erro e exibindo a mensagem ao usuário
            Toast({ error: false, message });

            // Parando o processamento, e redirecionando o usuário a uma nova página após 5 segundos
            return setTimeout(() => {
                window.location = "/userTransactions";
            }, 500);
        };

    }).catch((err) => {
            // Parando o processamento, retornando o status de erro e exibindo a mensagem
            return Toast({ 
                error: true,
                message: err
            });
    });
};

export default loginService;
