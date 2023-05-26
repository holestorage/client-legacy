import style from "./folder-list.module.css";

export default function FolderList({ list }) {
    return (
        <div className={style.container}>
            {
                list.map((value, key) =>
                    <div key={key}>
                        <p>{value.name}</p>
                    </div>
                )
            }
        </div>
    )
}
