import style from "./icon-icon.module.css";

export default function IconButton({ icon, text }) {
    return (
        <button className={style.button}>
            <i className={icon} />
            <p>{text}</p>
        </button>
    )
}
