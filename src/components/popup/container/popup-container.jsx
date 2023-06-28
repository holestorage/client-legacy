import style from "./popup-container.module.css";

export default function PopupContainer({ close, children }) {
    return (
        <div className={style.container}>
            <div className={style.content}>
                {children}
            </div>
            <div className={style.full} onClick={close} />
        </div>
    )
}
