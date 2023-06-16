import style from "./popup-container.module.css";

import {useContext} from "react";
import {PopupContext} from "../../provider/popup-provider";

export default function PopupContainer({ children }) {
    const popupContext = useContext(PopupContext);

    return (
        <div className={style.container}>
            {children}
            <div className={style.background} onClick={() => popupContext.setCurrent(null)} />
        </div>
    )
}
