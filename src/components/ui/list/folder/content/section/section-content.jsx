import {Fragment} from "react";
import FileList from "../../../file/file-list";
import FolderList from "../../folder-list";

export default function SectionContent({ files, folders, fallback }) {
    return (
        <Fragment>
            {folders.length > 0 && <FolderList list={folders} />}
            {files.length > 0 ? <FileList list={files} /> : fallback}
        </Fragment>
    )
}
