import style from "./main-popup.module.css";

import {useContext} from "react";

import IconButton from "../../ui/button/icon/icon-button";
import PopupContainer from "../container/popup-container";

import {PopupContext} from "../../provider/popup-provider";

export default function MainPopup({ title, children, footer, close }) {
    const popupContext = useContext(PopupContext);

    return (
        <PopupContainer>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.header}>
                        {title && <h4>{title}</h4>}
                        <IconButton icon="fa-sharp fa-regular fa-xmark" action={() => {
                            popupContext.setCurrent(null);

                            if (close) {
                                close();
                            }
                        }}></IconButton>
                    </div>
                    <div className={style.content}>
                        {children}
                    </div>
                </div>
                <div className={style.footer}>
                    {footer}
                </div>
            </div>
        </PopupContainer>
    )
}
