import Toast from "../components/Toast";

function confirmEmailService({ emailCode }) {

    // Criando um objeto com o código de e-mail informado pelo usuário
    const userCode = {
        emailCode: emailCode
    };

    // Criando a chamada fetch
    fetch("https://b29d-191-252-191-239.ngrok-free.app/confirm-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userCode),
    }).then((response) => response.json()).then((jsonBody) => {
        // Atribuindo o erro informado do servidor a uma variável
        const error = jsonBody.error;
        // Atribuindo a mensagem informada pelo servidor a uma variável
        const message = jsonBody.message;

        // Validando o status do erro informado
        if(error) {
            // Parando o processamento, retornando o status de erro e exibindo a mensagem
            return Toast({ error: true, message });
        }else {
            // Não retornando o status de erro e exibindo a mensagem
            Toast({ error: false, message });

            // Parando o processamento, e redirecionando o usuário a uma nova página após 5 segundos
            return setTimeout(() => {
                window.location = "/userTransactions";
            }, 500);
        }

    }).catch((err) => {
        // Parando o processamento, retornando o status de erro e exibindo a mensagem
        return Toast({ 
            error: true,
            message: err
        });
    });

};

export default confirmEmailService;