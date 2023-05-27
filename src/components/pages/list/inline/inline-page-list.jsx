import style from "./inline-page-list.module.css";

import {Fragment} from "react";
import {Link} from "react-router-dom";

import MainTab from "../../../ui/category/tab/main/main-tab";

export default function InlinePageList({ list }) {
    return (
        <div className={style.container}>
            {
                list.map((value, key) =>
                    <Fragment key={key}>
                        <Link to={value.path}>
                            <MainTab text={value.name} icon={value.icon} />
                        </Link>
                    </Fragment>
                )
            }
        </div>
    )
}
