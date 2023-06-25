import style from "./icon-icon.module.css";

export default function IconButton({ action, icon, text }) {
    return (
        <button onClick={action} className={style.button}>
            <i className={icon} />
            <p>{text}</p>
        </button>
    )
}
