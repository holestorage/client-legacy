import style from "./folder-list.module.css";

import {Fragment} from "react";

import Folder from "./folder/folder";

export default function FolderList({ list, ...props }) {
    return (
        <div className={style.container}>
            {
                list.map((value, key) =>
                    <Fragment key={key}>
                        <Folder { ...props } value={value} />
                    </Fragment>
                )
            }
        </div>
    )
}
