import style from "./fallback.module.css";

export default function Fallback({ title, icon }) {
    return (
        <div className={style.container}>
            <i className={icon} />
            <h1>{title}</h1>
        </div>
    )
}
