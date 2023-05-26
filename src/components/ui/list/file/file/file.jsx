import style from "./file.module.css";

export default function File({ value }) {
    return (
        <div className={style.container}>
            <p>{value.file}</p>
            <p>{value.name}</p>
            <p>{value.date}</p>
            <p>{value.size}</p>
            <div>
                <p>tools</p>
            </div>
        </div>
    )
}
