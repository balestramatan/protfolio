import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastComponent = () => {
    return (
        <ToastContainer
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={true}
            limit={3}
        />
    );
};

export default ToastComponent;
