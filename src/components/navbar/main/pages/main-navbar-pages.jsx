import style from "./main-navbar-pages.module.css";
import {Fragment} from "react";
import MainTab from "../../../ui/category/tab/main/main-tab";

const list = [
    {
        name: "Home",
        icon: 'fa-regular fa-house-blank',
        path: '/'
    },
    {
        name: "Drive",
        icon: 'fa-regular fa-house-blank',
        path: '/drive'
    },
    {
        name: "Pricing",
        icon: 'fa-regular fa-house-blank',
        path: '/pricing'
    },
    {
        name: "About",
        icon: 'fa-regular fa-house-blank',
        path: '/about'
    }
]

export default function MainNavbarPages() {
    return (
        <div className={style.container}>
            {
                list.map((value, key) =>
                    <Fragment key={key}>
                        <MainTab text={value.name} icon={value.icon} path={value.path} />
                    </Fragment>
                )
            }
        </div>
    )
}
