import style from "./main-category.module.css";

import {Fragment} from "react";

import SlimTab from "../tab/slim/slim-tab";

export default function MainCategory({ list }) {
    return (
        <div className={style.container}>
            {
                list.map((section, key) =>
                    <div key={key}>
                        {
                            section.list.map((value, key) =>
                                <Fragment key={key}>
                                    <SlimTab text={value.name} icon={value.icon} path={value.path} />
                                </Fragment>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}
