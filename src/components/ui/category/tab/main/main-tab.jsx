import style from "./main-tab.module.css";

import {NavLink} from "react-router-dom";

export default function MainTab({ icon, text, path }) {
    return (
        <NavLink className={({ isActive }) => isActive ? style.active : style.element} to={path}>
            <i className={icon} />
            <p>{text}</p>
        </NavLink>
    )
}
