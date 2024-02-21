import Toast from "../components/Toast";

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

        if(error) {
            Toast({ error: true, message });
        }else {
            Toast({ error: false, message });
        }

    }).catch((err) => {
            Toast({ 
                error: true,
                message: err
            });
    });
};

export default loginService;
