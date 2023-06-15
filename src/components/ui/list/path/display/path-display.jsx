import style from "./path-module.module.css";

import {Fragment} from "react";
import Path from "./path/path";
export default function PathDisplay({ data }) {
    const list = [];

    const iterateParent = (parent) => {
        if (parent) {
            list.push(parent);
            iterateParent(parent.parent);
        }
    };

    iterateParent(data);
    list.reverse();

    return (
        <div className={style.container}>
            {
                list.map((value, key) =>
                    <Fragment key={key}>
                        <Path value={value} />
                        {key !== list.length - 1 && <i className="fa-light fa-chevron-right" />}
                    </Fragment>
                )
            }
        </div>
    )
}
