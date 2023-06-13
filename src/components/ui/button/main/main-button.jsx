import style from "./main-button.module.css";

export default function MainButton({ icon, text, action, submit }) {
    if (submit) {
        return (
            <input className={style.button} type="submit" value={text} onSubmit={submit}/>
        )
    }

    return (
        <button className={style.button} onClick={action}>
            {icon && <i className={icon}/>}
            {text}
        </button>
    )
}
