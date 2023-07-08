import MainPopup from "../main/main-popup";
import MainButton from "../../ui/button/main/main-button";
import {useContext, useState} from "react";
import Form from "../../../context/form";
import IconInput from "../../ui/input/icon/icon-input";
import {PopupContext} from "../../../provider/popup-provider";

export default function InputPopup({ title, body, placeholder, children, button }) {
    const {setCurrent} = useContext(PopupContext);

    const [value, setValue] = useState('');

    const handleSubmit = () => {
        button.action(value);
        setCurrent(null);
    };

    return (
        <MainPopup title={title}>
            <h5>{body}</h5>
            {children}
            <Form onSubmit={handleSubmit}>
                <IconInput placeholder={placeholder} type="text" value={value}
                           onChange={(value) => setValue(value.target.value)}/>
                <MainButton type="submit" text="Continue"/>
            </Form>
        </MainPopup>
    )
}
