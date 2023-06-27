import style from "./file-icon.module.css";
import FilePreview from "../file-preview";

export default function FileIcon({ action, ...props }) {
    return (
        <div onClick={action} className={style.container}>
            <FilePreview { ...props } />
        </div>
    )
}
