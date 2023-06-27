import MainPopup from "../main/main-popup";
import MainButton from "../../ui/button/main/main-button";
import {Fragment, useContext, useState} from "react";
import {PopupContext} from "../../provider/popup-provider";
import Loadable from "../../skeleton/loadable/loadable";
import IconInput from "../../ui/input/icon/icon-input";

export default function InputPopup({ title, body, placeholder, children, button }) {
    const [value, setValue] = useState();

    const popupContext = useContext(PopupContext);

    return (
        <MainPopup title={title} footer={
            <Fragment>
                <MainButton>
                    <Loadable loadable action={() => button.action(value)}>
                        <p>Confirm</p>
                    </Loadable>
                </MainButton>
                <MainButton text="Cancel" action={() => popupContext.setCurrent(null)} />
            </Fragment>
        }>
            <IconInput placeholder={placeholder} type="text" value={value}
                       onChange={(value) => setValue(value.target.value)}/>
            <h5>{body}</h5>
            {children}
        </MainPopup>
    )
}
