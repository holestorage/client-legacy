import style from "./block-page-list.module.css";

import {Fragment} from "react";

import IconButton from "../../../ui/button/icon/icon-button";

export default function BlockPageList({ list }) {
    return (
        <div className={style.container}>
            {
                list.map((value, key) =>
                    <Fragment key={key}>
                        <IconButton icon={value.icon} path={value.path} />
                    </Fragment>
                )
            }
        </div>
    )
}
