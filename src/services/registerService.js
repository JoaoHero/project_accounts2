import Toast from "../components/Toast";

function registerService({ name, email, cpf, password}) {

    // Criando um objeto com os dados do usuário
    const user = {
        name: name,
        email: email,
        cpf: cpf,
        password: password
    };

    // Criando a chamada fetch
    fetch("http://191.252.191.239:8080/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    }).then((response) => response.json()).then((jsonBody) => {
        // Atribuindo o erro informado do servidor a uma variável
        const error = jsonBody.error;
        // Atribuindo a mensagem informada pelo servidor a uma variável
        const message = jsonBody.message;

        // Validando o status do erro informado
        if(error) {
            // Parando o processamento, retornando o status de erro e exibindo a mensagem ao usuário
            return Toast({ error: true, message });
        }else {
            // Não retornando o status de erro e exibindo a mensagem ao usuário
            Toast({ error: false, message });

            // Parando o processamento, e redirecionando o usuário a uma nova página após 5 segundos
            setTimeout(() => {
                window.location = "/confirm-email";
            }, 500);
        };

    }).catch((err) => {
        // Parando o processamento, retornando o status de erro e exibindo a mensagem ao usuário
        return Toast.error({
            error: true,
            message: err
        });
    });
};

export default registerService;
