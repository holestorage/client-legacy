import {Fragment} from "react";

import MainButton from "../../ui/button/main/main-button";
import Container from "../../ui/container/container";
import HeaderMain from "../../ui/header/main/header-main";
import FolderList from "../../ui/list/folder/folder-list";
import FileList from "../../ui/list/file/file-list";
import PathDisplay from "../../ui/list/path/display/path-display";

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
        <Container>
            <HeaderMain left={
                <Fragment>
                    <MainButton text="Upload file" />
                    <MainButton text="Create folder" />
                </Fragment>
            }>
                <PathDisplay list={[{name: "Drive"}, {name: "Family"}]} />
            </HeaderMain>
            {folders.length > 0 && <FolderList list={files} />}
            {files.length > 0 ? <FileList list={files} /> : fallback}
        </Container>
    )
}
