import style from "./main-button.module.css";

export default function MainButton({ icon, text, action }) {
    return (
        <button className={style.button} onClick={action}>
            {icon && <i className={icon}/>}
            {text}
        </button>
    )
}
