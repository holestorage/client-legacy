import style from "./popup-container.module.css";

export default function PopupContainer({ children }) {
    return (
        <div className={style.container}>
            {children}
            <div className={style.full} />
        </div>
    )
}
