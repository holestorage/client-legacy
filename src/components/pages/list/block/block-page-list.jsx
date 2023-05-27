import style from "./block-page-list.module.css";

import IconButton from "../../../ui/button/icon/icon-button";
import {Link} from "react-router-dom";

export default function BlockPageList({ list }) {
    return (
        <div className={style.container}>
            {
                list.map((value, key) =>
                    <Link key={key} to={value.path}>
                        <IconButton icon={value.icon} path={value.path} />
                    </Link>
                )
            }
        </div>
    )
}
