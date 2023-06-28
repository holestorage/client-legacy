import style from "./popup-container.module.css";

export default function PopupContainer({ centered, children }) {
    return (
        <div className={centered ? style.centered : style.container}>
            <div className={style.content}>
                {children}
            </div>
            <div className={style.full} />
        </div>
    )
}
