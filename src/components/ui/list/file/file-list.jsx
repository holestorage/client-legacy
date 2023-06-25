import style from "./file-list.module.css";

import {Fragment} from "react";

import File from "./file/file";
import Section from "../section/section/section";

export default function FileList({ list, ...props }) {
    const sections = [
        {
            id: 'file',
            name: null
        },
        {
            id: 'name',
            name: 'Name'
        },
        {
            id: 'date',
            name: 'Date'
        },
        {
            id: 'size',
            name: 'Size'
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
                        <File { ...props } value={value} />
                    </Fragment>
                )
            }
        </div>
    )
}
