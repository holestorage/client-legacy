import style from "./tool-list.module.css";

import {Fragment} from "react";

import IconButton from "../../button/icon/icon-button";

export default function ToolList({ section }) {
    return (
        <div className={style.container}>
            {
                section.map((value, key) =>
                    <div className={style.element} key={key}>
                        {
                            value.list.map((value, key) =>
                                <Fragment key={key}>
                                    <IconButton icon={value.icon} />
                                </Fragment>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}
