import style from "./main-button.module.css";

export default function MainButton({ icon, text, action, submit, className }) {
    if (submit) {
        return (
            <input className={[style.button, className].join(" ")} type="submit" value={text} onSubmit={submit}/>
        )
    }

    return (
        <button className={[style.button, className].join(" ")} onClick={action}>
            {icon && <i className={icon}/>}
            {text}
        </button>
    )
}
