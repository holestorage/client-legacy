import style from "./bucket-list.module.css";

import {Fragment} from "react";

import Section from "../section/section/section";
import Bucket from "./bucket/bucket";

export default function BucketList({ list }) {
    const sections = [
        {
            id: 'file',
            name: null
        },
        {
            id: 'name',
            name: 'Name'
        }
    ]

    return (
        <div className={style.container}>
            <div>
                {
                    sections.map((value, key) =>
                        <Fragment key={key}>
                            <Section value={value} />
                        </Fragment>
                    )
                }
            </div>
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
