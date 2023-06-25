import style from "./file-box.module.css";

import FileIcon from "../icon/file-icon";
import ToolList from "../../../tool/tool-list";

export default function FileBox({ section, value }) {
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
