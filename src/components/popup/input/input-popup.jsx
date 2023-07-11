import MainPopup from "../main/main-popup";
import MainButton from "../../ui/button/main/main-button";
import {Fragment, useContext, useState} from "react";
import Form from "../../../context/form";
import IconInput from "../../ui/input/icon/icon-input";
import {PopupContext} from "../../../provider/popup-provider";

export default function InputPopup({ title, body, placeholder, children, button }) {
    const popupContext = useContext(PopupContext);
    const {setCurrent} = useContext(PopupContext);

    const [value, setValue] = useState('');

    const handleSubmit = () => {
        button.action(value);
        setCurrent(null);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <MainPopup title={title} footer={<Fragment>
                <MainButton type="submit" text="Done"/>
                <MainButton text="Cancel" action={() => popupContext.setCurrent(null)} />
            </Fragment>
            }>
                <h5>{body}</h5>
                {children}
                <IconInput placeholder={placeholder} type="text" value={value}
                           onChange={(value) => setValue(value.target.value)}/>
            </MainPopup>
        </Form>
    )
}
