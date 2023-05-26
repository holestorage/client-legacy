import style from "./section.module.css";

export default function Section({ value }) {
    return (
        <div className={style.container}>
            <p>{value.name}</p>
        </div>
    )
}
