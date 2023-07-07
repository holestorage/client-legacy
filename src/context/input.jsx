import {useContext} from 'react';
import {FormContext} from "./form";

export default function Input({name, type, placeholder, ...props}) {
    const {form, setForm} = useContext(FormContext);

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    };

    return (
        <input name={name} type={type} placeholder={placeholder} {...props} onChange={handleChange} />
    );
}
