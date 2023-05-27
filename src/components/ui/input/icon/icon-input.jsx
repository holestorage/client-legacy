import style from "./icon-input.module.css";

export default function IconInput({ text, icon }) {
    return (
        <div className={style.container}>
            <input placeholder={text} />
            <i className={icon} />
        </div>
    )
}
