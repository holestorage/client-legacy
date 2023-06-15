import style from "./bucket.module.css";

import {Link} from "react-router-dom";

export default function Bucket({ value }) {
    return (
        <Link to={`folder/${value.root}`} className={style.container}>
            <i className="fa-regular fa-box-open" />
            <p>{value.name}</p>
        </Link>
    )
}
