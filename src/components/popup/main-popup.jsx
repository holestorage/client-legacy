import style from "./drawer.module.css";

import {Fragment, useContext} from "react";
import {PopupContext} from "../provider/popup-provider";

export default function MainPopup({ children }) {
    const popupContext = useContext(PopupContext);

    return (
        <Fragment>
            <div onClick={() => popupContext.setCurrent(null)} className={style.container} />
            {children}
        </Fragment>
    )
}
