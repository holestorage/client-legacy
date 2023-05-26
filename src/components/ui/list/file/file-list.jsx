import style from "./file-list.module.css";

export default function FileList() {
    const list = [
        {
            file: 'png',
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
            {
                sections.map((section, key) =>
                    <div key={key}>
                        {
                            list.map((value, key) =>
                                <div key={key}>
                                    <h1>{section.name}</h1>
                                    <p>{value[section.id]}</p>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}
