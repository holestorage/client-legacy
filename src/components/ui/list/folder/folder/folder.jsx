import style from "./folder.module.css";

import {Link} from "react-router-dom";
import FileDrop from "../../../../file/drop/file-drop";
import {UploadContext, uploadFile} from "../../../../../provider/upload-provider";
import {useContext} from "react";

export default function Folder({ value }) {
    const {upload, setUpload} = useContext(UploadContext);

    return (
        <FileDrop action={(file) => uploadFile(value.id, file, upload, setUpload)}>
            <Link to={`/folder/${value.id}`} className={style.container}>
                <i className="fa-regular fa-folder" />
                <p>{value.name}</p>
            </Link>
        </FileDrop>
    )
}
