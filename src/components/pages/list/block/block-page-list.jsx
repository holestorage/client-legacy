import style from "./block-page-list.module.css";

import {NavLink} from "react-router-dom";

import IconButton from "../../../ui/button/icon/icon-button";

export default function BlockPageList({ list }) {
    return (
        <div className={style.container}>
            {
                list.map((value, key) =>
                    <NavLink key={key} className={({ isActive }) => isActive ? style.active : null} to={value.path}>
                        <IconButton icon={value.icon} path={value.path} />
                    </NavLink>
                )
            }
        </div>
    )
}
