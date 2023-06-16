import style from "./main-popup.module.css";

import {useContext} from "react";

import IconButton from "../../ui/button/icon/icon-button";
import PopupContainer from "../container/popup-container";

import {PopupContext} from "../../provider/popup-provider";

export default function MainPopup({ centered, title, children, footer }) {
    const popupContext = useContext(PopupContext);

    return (
        <PopupContainer>
            <div className={centered ? style.centered : style.container}>
                <div className={style.header}>
                    {title && <h1>{title}</h1>}
                    <IconButton icon="fa-sharp fa-regular fa-xmark" action={() => popupContext.setCurrent(null)}></IconButton>
                </div>
                <div className={style.content}>
                    {children}
                </div>
                <div className={style.footer}>
                    {footer}
                </div>
            </div>
        </PopupContainer>
    )
}
