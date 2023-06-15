import style from "./path.module.css";
import {Link} from "react-router-dom";

export default function Path({ value }) {
    return (
        <Link to={`/folder/${value.id}`} className={style.container}>
            <p>{value.name ? value.name : "Drive"}</p>
        </Link>
    )
}
