import style from "./main-category.module.css";

import {NavLink} from "react-router-dom";

export default function MainCategory({ list }) {
    return (
        <div className={style.container}>
            {
                list.map((section, key) =>
                    <div key={key}>
                        {
                            section.list.map((value, key) =>
                                <NavLink className={({ isActive }) => isActive ? style.active : style.element} to={value.path} key={key}>
                                    <i className={value.icon} />
                                    <p>{value.name}</p>
                                </NavLink>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}
