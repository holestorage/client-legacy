import style from "./popup-dialog.module.css";

import MainPopup from "../main/main-popup";
import MainButton from "../../ui/button/main/main-button";
import {Fragment} from "react";

export default function PopupDialog({ title, body, children, button }) {
    return (
        <MainPopup title={title} footer={
            <Fragment>
                <MainButton className={style[button.type]} text={button.text} />
                <MainButton text="Cancel" />
            </Fragment>
        }>
            <h5>{body}</h5>
            {children}
        </MainPopup>
    )
}
