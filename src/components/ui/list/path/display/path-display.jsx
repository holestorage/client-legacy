import style from "./path-module.module.css";

import {Fragment} from "react";
export default function PathDisplay({ data }) {
    const parentList = [];

    const iterateParent = (parent) => {
        if (parent) {
            parentList.push(parent);
            iterateParent(parent.parent);
        }
    };

    iterateParent(data.parent);

    return (
        <div className={style.container}>
            {
                parentList.map((value, key) =>
                    <Fragment key={key}>
                        {value.name}
                    </Fragment>
                )
            }
        </div>
    )
}
