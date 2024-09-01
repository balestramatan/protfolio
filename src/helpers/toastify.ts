import { cssTransition, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const bounce = cssTransition({
    enter: 'animate__animated animate__bounceIn',
    exit: 'animate__animated animate__bounceOut',
});

class ToastUtil {
    info = (message: string) => {
        toast.info(message, {
            transition: bounce,
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            rtl: true,
            pauseOnFocusLoss: false,
            draggable: false,
            pauseOnHover: true,
            style: {
                textAlign: 'right',
                width: '90%',
            },
        });
    };

    success = (message: string) => {
        toast.success(message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            rtl: true,
            pauseOnFocusLoss: false,
            draggable: false,
            pauseOnHover: true,
            style: {
                textAlign: 'right',
                width: '90%',
            },
        });
    };

    error = (message: string) => {
        toast.error(message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            rtl: true,
            pauseOnFocusLoss: false,
            draggable: false,
            pauseOnHover: true,
            style: {
                textAlign: 'right',
                width: '90%',
            },
        });
    };
}

// Assign the instance to a variable before exporting
const toastUtilInstance = new ToastUtil();
export default toastUtilInstance;
