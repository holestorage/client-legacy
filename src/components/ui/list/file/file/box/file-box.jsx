import style from "./file-box.module.css";

import ToolList from "../../../tool/tool-list";
import moment from "moment";
import convertSize from "convert-size";
import FileIcon from "../preview/icon/file-icon";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {PopupContext} from "../../../../../provider/popup-provider";

export default function FileBox({ data, ...props }) {
    const navigate = useNavigate();
    const popupContext = useContext(PopupContext);

    const open = (data) => {
        navigate(`/folder/${data.folder}/${data.id}`);
    }

    const close = () => {
        popupContext.setCurrent(null)
    };

    return (
        <div onClick={() => open(data)} className={style.container}>
            <FileIcon data={data} />
            <p>{data.name}</p>
            <p>{moment(data.date).calendar()}</p>
            <p>{convertSize(data.size, { accuracy: -1 })}</p>
            <div className={style.content}>
                <ToolList { ...props } data={data} open={open} close={close} />
            </div>
        </div>
    )
}
