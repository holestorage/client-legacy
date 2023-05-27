import style from "./main-category.module.css";

import MainTab from "../tab/main/main-tab";
import {Fragment} from "react";

export default function MainCategory({ list }) {
    return (
        <div className={style.container}>
            {
                list.map((section, key) =>
                    <div key={key}>
                        {
                            section.list.map((value, key) =>
                                <Fragment key={key}>
                                    <MainTab text={value.name} icon={value.icon} path={value.path} />
                                </Fragment>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}
