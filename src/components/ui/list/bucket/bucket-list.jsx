import style from "./bucket-list.module.css";

import {Fragment} from "react";

import Bucket from "./bucket/bucket";

export default function BucketList({ list }) {
    return (
        <div className={style.container}>
            {
                list.map((value, key) =>
                    <Fragment key={key}>
                        <Bucket value={value} />
                    </Fragment>
                )
            }
        </div>
    )
}
