import { Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast({ error, message }) {

    if(error) {
        toast.success(message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Zoom,
        });
    }else {
        toast.error(`Erro: ${message}`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Zoom,
            });
    };
};

export default Toast;