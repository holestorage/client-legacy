import style from "./block-page-list.module.css";

import {Link} from "react-router-dom";

import IconButton from "../../../ui/button/icon/icon-button";

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
