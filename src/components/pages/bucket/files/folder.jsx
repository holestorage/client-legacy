import {Fragment} from "react";
import MainButton from "../../../ui/button/main/main-button";
import HeaderMain from "../../../ui/header/main/header-main";
import PathDisplay from "../../../ui/list/path/display/path-display";
import FolderList from "../../../ui/list/folder/folder-list";
import FileList from "../../../ui/list/file/file-list";

const files = [
    {
        type: 'image/png',
        name: 'test',
        date: 'test',
        size: 1
    },
    {
        type: 'image/png',
        name: 'test',
        date: 'test',
        size: 1
    },
    {
        type: 'image/png',
        name: 'test',
        date: 'test',
        size: 1
    }
]

const folders = [
    {
        type: 'image/png',
        name: 'test',
        date: 'test',
        size: 1
    },
    {
        type: 'image/png',
        name: 'test',
        date: 'test',
        size: 1
    }
]

export default function BoardPage({ fallback }) {
    return (
        <Fragment>
            <HeaderMain left={
                <Fragment>
                    <MainButton icon="fa-regular fa-angle-up" text="Upload file" />
                    <MainButton icon="fa-regular fa-folder" text="Create folder" />
                </Fragment>
            }>
                <PathDisplay list={[{name: "Drive"}, {name: "Family"}]} />
            </HeaderMain>
            {folders.length > 0 && <FolderList list={files} />}
            {files.length > 0 ? <FileList list={files} /> : fallback}
        </Fragment>
    )
}
