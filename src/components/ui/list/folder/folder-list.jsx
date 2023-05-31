import style from "./folder-list.module.css";

import {Fragment} from "react";

import Folder from "./folder/folder";

export default function FileList({ list }) {
    return (
        <div className={style.container}>
            {
                list.map((value, key) =>
                    <Fragment key={key}>
                        <Folder value={value} />
                    </Fragment>
                )
            }
        </div>
    )
}
