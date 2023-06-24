import style from "./popup-dialog.module.css";

import MainPopup from "../main/main-popup";
import MainButton from "../../ui/button/main/main-button";
import {Fragment, useContext} from "react";
import {PopupContext} from "../../provider/popup-provider";
import Loadable from "../../skeleton/loadable/loadable";

export default function PopupDialog({ title, body, children, button }) {
    const popupContext = useContext(PopupContext);

    return (
        <MainPopup title={title} footer={
            <Fragment>
                <MainButton className={style[button.type]} action={button.action}>
                    <Loadable loadable action={button.action}>
                        <p>Confirm</p>
                    </Loadable>
                </MainButton>
                <MainButton text="Cancel" action={() => popupContext.setCurrent(null)} />
            </Fragment>
        }>
            <h5>{body}</h5>
            {children}
        </MainPopup>
    )
}
