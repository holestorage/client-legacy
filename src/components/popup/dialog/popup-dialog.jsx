import style from "./popup-dialog.module.css";

import MainPopup from "../main/main-popup";
import MainButton from "../../ui/button/main/main-button";

export default function PopupDialog({ title, body, children, button }) {
    return (
        <MainPopup title={title}>
            <h5>{body}</h5>
            <MainButton className={style[button.type]} text={button.text} />
            <MainButton text="Cancel" />
            {children}
        </MainPopup>
    )
}
