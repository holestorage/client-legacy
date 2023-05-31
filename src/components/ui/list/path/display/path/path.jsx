import style from "./path.module.css";

export default function Path({ value }) {
    return (
        <div className={style.container}>
            <p>{value.name}</p>
        </div>
    )
}
