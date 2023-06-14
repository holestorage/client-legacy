import style from "./bucket.module.css";

export default function Bucket({ value }) {
    return (
        <div className={style.container}>
            <i className="fa-regular fa-box-open" />
            <p>{value.name}</p>
        </div>
    )
}
