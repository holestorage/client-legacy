import style from "./main-button.module.css";

export default function MainButton({ text }) {
    return (
        <button className={style.button}>{text}</button>
    )
}
