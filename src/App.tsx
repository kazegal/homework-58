import {useState} from 'react';
import Modal from "./components/Modal/Modal";
import Alert from "./components/Alert/Alert";
import './App.css';

function App() {

    const [show, setShow] = useState(false);

    const onCloseAlert = () => {
        document.body.style.background = 'grey';
        console.log("Alert removed!");
    }

    return (
        <>
            <button className="btn bg-success mt-3 mb-5 ms-5 " onClick={() => setShow(true)}>Level-1</button>
            <Modal show={show} title="Some kinda modal title" onClose={() => setShow(false)}>
                <div className="modal-body">
                    <p>This is modal content</p>
                </div>
            </Modal>
            <Alert
                type="warning"
                onDismiss={onCloseAlert}
            >This is a warning type alert
            </Alert>

            <Alert type="success"
            >This is a success type alert
            </Alert>
        </>
    );
}

export default App;
