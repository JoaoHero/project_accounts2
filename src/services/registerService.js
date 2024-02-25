import Toast from "../components/Toast";

function registerService({ name, email, cpf, password}) {

    const user = {
        name: name,
        email: email,
        cpf: cpf,
        password: password
    }

    fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    }).then((response) => response.json()).then((jsonBody) => {
        const error = jsonBody.error;
        const message = jsonBody.message;

        if(error) {
            Toast({ error: true, message });
        }else {
            Toast({ error: false, message });

            setTimeout(() => {
                window.location = "/confirm-email";
            }, 500);
        };

    }).catch((err) => {
        Toast.error({
            error: true,
            message: err
        })
    });
};

export default registerService;
