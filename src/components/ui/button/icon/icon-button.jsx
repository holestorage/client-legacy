import style from "./icon-icon.module.css";

export default function IconButton({ icon, text, action }) {
    return (
        <button onClick={action} className={style.button}>
            <i className={icon} />
            <p>{text}</p>
        </button>
    )
}
