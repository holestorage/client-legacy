import style from "./folder-list.module.css";

import {Fragment} from "react";

export default function FolderList({ list }) {
    return (
        <div className={style.container}>
            {
                list.map((value, key) =>
                    <Fragment key={key}>
                        <div>
                            <p>{value.name}</p>
                        </div>
                        { key !== list.length - 1 && <i className="fa-light fa-chevron-right" /> }
                    </Fragment>
                )
            }
        </div>
    )
}
