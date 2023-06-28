import style from "./popup-container.module.css";

export default function PopupContainer({ children }) {
    return (
        <div className={style.container}>
            <div className={style.content}>
                {children}
            </div>
            <div className={style.full} />
        </div>
    )
}
