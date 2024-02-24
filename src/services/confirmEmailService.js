import Toast from "../components/Toast";

function confirmEmailService({ emailCode }) {

    const userCode = {
        emailCode: emailCode
    }

    fetch("http://localhost:8080/confirm-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userCode),
    }).then((response) => response.json()).then((jsonBody) => {
        const error = jsonBody.error;
        const message = jsonBody.message;

        if(error) {
            Toast({ error: true, message });
        }else {
            Toast({ error: false, message });

            setTimeout(() => {
                window.location = "/";
            }, 2000);
        }

    }).catch((err) => {
        Toast({ 
            error: true,
            message: err
        });
    });

};

export default confirmEmailService;