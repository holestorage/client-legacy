import style from "./folder.module.css";

export default function Folder({ value }) {
    return (
        <div className={style.container}>
            <i className="fa-regular fa-folder" />
            <p>{value.name}</p>
        </div>
    )
}
