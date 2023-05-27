import {Fragment} from "react";

import MainButton from "../../ui/button/main/main-button";
import Container from "../../ui/container/container";
import HeaderMain from "../../ui/header/main/header-main";
import FolderList from "../../ui/list/folder/folder-list";
import FileList from "../../ui/list/file/file-list";

const files = [
    {
        type: 'image/png',
        name: 'test',
        date: '1',
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
                <FolderList list={[{name: "Drive"}, {name: "Family"}]} />
            </HeaderMain>
            {files.length > 0 ? <FileList list={files} /> : fallback}
        </Container>
    )
}
