import style from "./file-box.module.css";

import FileIcon from "../icon/file-icon";
import ToolList from "../../../tool/tool-list";
import moment from "moment";
import convertSize from "convert-size";

export default function FileBox({ open, section, data }) {
    return (
        <div className={style.container}>
            <FileIcon action={() => open(data)} data={data} />
            <p>{data.name}</p>
            <p>{moment(data.date).calendar()}</p>
            <p>{convertSize(data.size, { accuracy: -1 })}</p>
            <div className={style.content}>
                <ToolList data={data} section={section.filter(item => item.featured)} />
            </div>
        </div>
    )
}
