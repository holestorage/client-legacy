import style from "./file-list.module.css";

import File from "./file/file";
import {Fragment} from "react";
import Section from "../section/section/section";

export default function FileList() {
    const list = [
        {
            type: 'image/png',
            name: 'test',
            date: '1',
            size: 1
        }
    ]

    const sections = [
        {
            id: 'file',
            name: 'File'
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
                        <File value={value} />
                    </Fragment>
                )
            }
        </div>
    )
}
