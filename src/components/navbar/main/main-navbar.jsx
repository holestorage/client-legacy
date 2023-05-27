import style from "./main-navbar.module.css";

import {Fragment} from "react";
import MainTab from "../../ui/category/tab/main/main-tab";

const list = [
    {
        name: "Home",
        icon: 'fa-regular fa-house-blank',
        path: '/'
    }
]

export default function MainNavbar() {
    return (
        <div className={style.container}>
            <div>

            </div>
            <div>
                {
                    list.map((value, key) =>
                        <Fragment key={key}>
                            <MainTab text={value.name} icon={value.icon} path={value.path} />
                        </Fragment>
                    )
                }
            </div>
            <div>

            </div>
        </div>
    )
}
