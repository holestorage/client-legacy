import style from "./main-head.module.css";

import {Link} from "react-router-dom";

export default function MainHead({ app }) {
    return (
        <div className={style.container}>
            <Link to={app ? '/app/' : '/'}>
                <p>Doglock</p>
            </Link>
        </div>
    )
}
