import style from "./folder.module.css";

import ToolList from "../../tool/tool-list";

export default function Folder({value}) {
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
                    icon: 'fa-regular fa-arrow-down-to-line'
                }
            ]
        },
        {
            list: [
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
            <i className="fa-regular fa-folder" />
            <p>{value.name}</p>
            <p>{value.date}</p>
            <div className={style.content}>
                <ToolList section={section.filter(item => item.featured)} />
            </div>
        </div>
    )
}
