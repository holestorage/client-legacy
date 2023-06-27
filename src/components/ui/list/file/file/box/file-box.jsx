import style from "./file-box.module.css";

import ToolList from "../../../tool/tool-list";
import moment from "moment";
import convertSize from "convert-size";
import FileIcon from "../preview/icon/file-icon";

export default function FileBox({ data, ...props }) {
    return (
        <div className={style.container}>
            <FileIcon data={data} />
            <p>{data.name}</p>
            <p>{moment(data.date).calendar()}</p>
            <p>{convertSize(data.size, { accuracy: -1 })}</p>
            <div className={style.content}>
                <ToolList { ...props } data={data} filter={item => item.featured} subfilter={item => item}  />
            </div>
        </div>
    )
}
