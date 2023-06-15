import style from "./folder.module.css";

import {Link} from "react-router-dom";

export default function Folder({ value }) {
    return (
        <Link to={`/folder/${value.id}`} className={style.container}>
            <i className="fa-regular fa-folder" />
            <p>{value.name}</p>
        </Link>
    )
}
