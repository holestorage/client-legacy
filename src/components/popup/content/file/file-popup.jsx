import style from "./file-popup.module.css";

import {useNavigate} from "react-router-dom";
import PopupContainer from "../../container/popup-container";
import FilePreview from "../../../ui/list/file/file/preview/file-preview";
import ToolList from "../../../ui/list/tool/tool-list";
import IconButton from "../../../ui/button/icon/icon-button";

export default function FilePopup({ folder, data }) {
    const navigate = useNavigate();

    return (
        <PopupContainer>
            <div className={style.container}>
                <div className={style.header}>
                    <p>{data.name}</p>
                    <ToolList accessible data={data} filter={item => item.full} />
                    <IconButton icon="fa-light fa-xmark" action={() => navigate(`/folder/${folder}`)} />
                </div>
                <div className={style.content}>
                    <FilePreview data={data} />
                </div>
            </div>
        </PopupContainer>
    )
}
