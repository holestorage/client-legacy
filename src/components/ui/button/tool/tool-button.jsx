import style from "./tool-icon.module.css";

export default function ToolButton({ icon, text }) {
    return (
        <button className={style.button}>
            <i className={icon} />
            <p>{text}</p>
        </button>
    )
}
