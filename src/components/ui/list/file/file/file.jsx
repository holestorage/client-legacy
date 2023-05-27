import style from "./file.module.css";
import ToolList from "../../tool/tool-list";

export default function File({value}) {
    const section = [
        {
            list: [
                {
                    id: 'open',
                    name: 'Open',
                    icon: 'fa-regular fa-file'
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
                    id: 'share',
                    name: 'Share',
                    icon: 'fa-regular fa-user-group'
                },
                {
                    id: 'send',
                    name: 'Send',
                    icon: 'fa-regular fa-mailbox'
                }
            ]
        },
        {
            list: [
                {
                    id: 'pin',
                    name: 'Pin',
                    icon: 'fa-regular fa-star'
                },
                {
                    id: 'color',
                    name: 'Color',
                    icon: 'fa-regular fa-paint-roller'
                },
            ]
        },
        {
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
            <p>{value.file}</p>
            <p>{value.name}</p>
            <p>{value.date}</p>
            <p>{value.size}</p>
            <ToolList section={section} />
        </div>
    )
}
