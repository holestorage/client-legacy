import style from "./slim-tab.module.css";

import {NavLink} from "react-router-dom";

export default function SlimTab({ icon, text, path }) {
    return (
        <NavLink className={({ isActive }) => isActive ? style.active : style.element} to={path}>
            <i className={icon} />
            <p>{text}</p>
        </NavLink>
    )
}
