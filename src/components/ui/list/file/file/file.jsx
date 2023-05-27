import style from "./file.module.css";

export default function File({value}) {
    const tools = [
        {
            list: [
                {
                    id: 'open',
                    name: 'Open'
                },
                {
                    id: 'download',
                    name: 'Download'
                }
            ]
        },
        {
            list: [
                {
                    id: 'share',
                    name: 'Share'
                },
                {
                    id: 'send',
                    name: 'Send'
                }
            ]
        },
        {
            list: [
                {
                    id: 'pin',
                    name: 'Pin'
                },
                {
                    id: 'color',
                    name: 'Color'
                },
            ]
        },
        {
            list: [
                {
                    id: 'clone',
                    name: 'Clone'
                },
                {
                    id: 'rename',
                    name: 'Rename'
                },
                {
                    id: 'remove',
                    name: 'Remove'
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
            <div>
                <p>tools</p>
            </div>
        </div>
    )
}
