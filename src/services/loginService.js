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
        const userName = jsonBody.name;


        if(error) {
            return Toast({ error: true, message });
        }else {
            const token = jsonBody.token;
            // Armazenar o token no localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('name', userName);

            Toast({ error: false, message });

            return setTimeout(() => {
                window.location = "/userTransactions";
            }, 500);
        };

    }).catch((err) => {
            Toast({ 
                error: true,
                message: err
            });
    });
};

export default loginService;
