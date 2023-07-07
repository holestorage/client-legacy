import {createContext, useContext, useState} from 'react';
import {showToast, ToastContext} from "../provider/toast-provider";

export const FormContext = createContext('form');

export default function Form({onSubmit, children, ...props}) {
    const toast = useContext(ToastContext);

    const [form, setForm] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await onSubmit(form);
        } catch (error) {
            showToast(toast, error);
        }
    };

    return (
        <FormContext.Provider value={{form, setForm}}>
            <form onSubmit={handleSubmit} {...props}>
                {children}
            </form>
        </FormContext.Provider>
    );
}
