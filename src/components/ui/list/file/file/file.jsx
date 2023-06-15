import style from "./file.module.css";

import ToolList from "../../tool/tool-list";
import FileIcon from "./icon/file-icon";
import {HoleApi} from "../../../../../App";
import { saveAs } from 'file-saver';

export default function File({ value }) {
    const section = [
        {
            featured: true,
            list: [
                {
                    id: 'open',
                    name: 'Open',
                    icon: 'fa-regular fa-arrow-up-right-and-arrow-down-left-from-center'
                },
                {
                    id: 'download',
                    name: 'Download',
                    icon: 'fa-regular fa-arrow-down-to-line',
                    action: (data) => {
                        HoleApi.get(`file/${data.id}/raw`, { responseType: "arraybuffer" }).then(response => {
                            saveAs(new Blob([response.data]), data.name);
                        })
                    }
                }
            ]
        },
        {
            list: [
                {
                    id: 'share',
                    name: 'Share',
                    icon: 'fa-regular fa-user-plus'
                },
                {
                    id: 'send',
                    name: 'Send',
                    icon: 'fa-regular fa-link'
                }
            ]
        },
        {
            list: [
                {
                    id: 'pin',
                    name: 'Pin',
                    icon: 'fa-light fa-bookmark'
                },
                {
                    id: 'color',
                    name: 'Color',
                    icon: 'fa-regular fa-palette'
                },
            ]
        },
        {
            featured: true,
            list: [
                {
                    id: 'clone',
                    name: 'Clone',
                    icon: 'fa-regular fa-clone'
                },
                {
                    id: 'rename',
                    name: 'Rename',
                    icon: 'fa-regular fa-pen-to-square'
                },
                {
                    id: 'remove',
                    name: 'Remove',
                    icon: 'fa-regular fa-trash'
                }
            ]
        }
    ]

    return (
        <div className={style.container}>
            <FileIcon data={value} />
            <p>{value.name}</p>
            <p>{value.date}</p>
            <p>{value.size}</p>
            <div className={style.content}>
                <ToolList data={value} section={section.filter(item => item.featured)} />
            </div>
        </div>
    )
}
