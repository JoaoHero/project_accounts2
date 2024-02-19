function loginService({ email, password }) {

    const user = {
        email: email,
        password: password
    }

    fetch("http://localhost:8080/login", {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(user),
    }).then((response) => response.json()).then((jsonBody) => {
        const error = jsonBody.error;
        const message = jsonBody.message;

        console.log(error);
        console.log(message);

    }).catch((err) => {
        console.log("Erro ao tentar se conectar com a rota POST", err);
    });
};

export default loginService;
