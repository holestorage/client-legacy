import style from "./main-button.module.css";

export default function MainButton({ icon, text }) {
    return (
        <button className={style.button}>
            {icon && <i className={icon}/>}
            {text}
        </button>
    )
}
