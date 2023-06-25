import style from "./file-box.module.css";

import FileIcon from "../icon/file-icon";
import ToolList from "../../../tool/tool-list";
import moment from "moment";

export default function FileBox({ open, section, value }) {
    return (
        <div className={style.container}>
            <FileIcon action={() => open(value.id)} data={value} />
            <p>{value.name}</p>
            <p>{moment(value.date).calendar()}</p>
            <p>{value.size}</p>
            <div className={style.content}>
                <ToolList data={value} section={section.filter(item => item.featured)} />
            </div>
        </div>
    )
}
