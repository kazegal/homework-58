import React, { useState } from 'react';
import { motion } from "framer-motion";

interface Props extends React.PropsWithChildren {
    type: string;
    onDismiss?: () => void;
}

const Alert: React.FC<Props> = ({ type, onDismiss, children }) => {

    const [showAlert, setShowAlert] = useState(true);

    const closeAlert = () => {
        if (onDismiss) {
            onDismiss();
        }
        setShowAlert(false);
    }

    const alertBackground = 'd-flex w-75 ms-5 alert alert-' + type

    if (showAlert) {
        return (
            <motion.div
                whileHover={{ scale: 1.1 }}
                onHoverStart={() => {
                }}
                onHoverEnd={() => {
                }}
                className={alertBackground}
            >
                {children}
                {onDismiss && (
                    <button onClick={closeAlert} className="btn btn-close ms-auto"></button>
                )}
            </motion.div>
        );
    }
    return null;
};

export default Alert;
