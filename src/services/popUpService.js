import Toast from "../components/Toast";

function popUpService({ route, value, email }) {

    const reqValue = {
        value: Number(value),
        email: email
    };

    fetch(`http://localhost:8080/userTransactions${route}`, {
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
        const error = body.error;
        const errorStatus = status;
        const message = body.message;
    
        if(error) {

            if(errorStatus === 401) {
                Toast({ error: true, message });

                return setTimeout(() => {
                    window.location = "/login"
                }, 1000);
            }

            return Toast({ error: true, message });

        } else {
            Toast({ error: false, message });
    
            return setTimeout(() => {
                window.location = "/userTransactions"
            }, 1000);
        };
        
    }).catch((err) => {
        return Toast.error({
            error: true,
            message: err
        });
    });
};

export default popUpService;