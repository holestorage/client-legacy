import style from "./popup-dialog.module.css";

import MainPopup from "../main/main-popup";
import MainButton from "../../ui/button/main/main-button";
import {Fragment, useContext} from "react";
import {PopupContext} from "../../provider/popup-provider";

export default function PopupDialog({ title, body, children, button }) {
    const popupContext = useContext(PopupContext);

    return (
        <MainPopup title={title} footer={
            <Fragment>
                <MainButton className={style[button.type]} text={button.text} action={button.action} />
                <MainButton text="Cancel" action={() => popupContext.setCurrent(null)} />
            </Fragment>
        }>
            <h5>{body}</h5>
            {children}
        </MainPopup>
    )
}
