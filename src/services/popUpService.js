import Toast from "../components/Toast";

function popUpService({ route, value, email }) {

    // Criando um objeto com os dados do usuário
    const reqValue = {
        value: Number(value),
        email: email
    };

    // Criando a chamada fetch
    fetch(`191.252.191.239:8080/userTransactions${route}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(reqValue),
    }).then((response) => {
        // Retorna a resposta para que possamos acessar o status e os dados no próximo then
        return response.json().then((jsonBody) => {
            return { status: response.status, body: jsonBody };
        });
    }).then(({ status, body }) => {
        // Atribuindo o erro informado do servidor a uma variável
        const error = body.error;
        // Atribuindo o status do erro informado do servidor a uma variável
        const errorStatus = status;
        // Atribuindo a mensagem informada pelo servidor a uma variável
        const message = body.message;

        // Validando o status do erro informado
        if(error) {
            // Tratando a resposta do servidor caso o status do erro for 401
            if(errorStatus === 401) {
                // Retornando o status de erro e exibindo a mensagem ao usuário
                Toast({ error: true, message });

                // Parando o processamento, e redirecionando o usuário a uma nova página após 5 segundos
                return setTimeout(() => {
                    window.location = "/login"
                }, 1000);
            };
            // Caso for outro erro, apenas retornar o status do erro e a mensagem, sem o redirecionamento

            // Parando o processamento, retornando o status de erro e exibindo a mensagem ao usuário
            return Toast({ error: true, message });

        } else {
            // Não retornando o status de erro e exibindo a mensagem ao usuário
            Toast({ error: false, message });

            // Parando o processamento, e redirecionando o usuário a uma nova página após 5 segundos
            return setTimeout(() => {
                window.location = "/userTransactions"
            }, 1000);
        };
        
    }).catch((err) => {
        // Parando o processamento, retornando o status de erro e exibindo a mensagem ao usuário
        return Toast.error({
            error: true,
            message: err
        });
    });
};

export default popUpService;