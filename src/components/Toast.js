// Importando o conteúdo da lib ToastFy
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast({ error, message }) {
    if(error) {
        toast.error(`${message}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
    }else {
        toast.success(message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
    };
};

export default Toast;