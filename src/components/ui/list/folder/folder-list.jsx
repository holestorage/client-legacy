import style from "./folder-list.module.css";

import {Fragment} from "react";

import Section from "../section/section/section";
import Folder from "./folder/folder";

export default function FileList({ list }) {
    const sections = [
        {
            id: 'color',
            name: null
        },
        {
            id: 'name',
            name: 'Name'
        },
        {
            id: 'date',
            name: 'Date'
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
                        <Folder value={value} />
                    </Fragment>
                )
            }
        </div>
    )
}
