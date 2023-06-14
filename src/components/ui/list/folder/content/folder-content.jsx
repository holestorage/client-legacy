import {Fragment, useEffect, useState} from "react";
import {Container} from "@chakra-ui/react";
import HeaderMain from "../../../header/main/header-main";
import MainButton from "../../../button/main/main-button";
import PathDisplay from "../../path/display/path-display";
import FileList from "../../file/file-list";
import FolderList from "../folder-list";
import {HoleApi} from "../../../../../App";
import BucketList from "../../bucket/bucket-list";
import {useParams} from "react-router-dom";

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

export default function FolderContent({ fallback }) {
    const [data, setData] = useState(null);

    const { id } = useParams();

    useEffect(async () => {
        setData(await (await HoleApi.get(`bucket/${id}/files`, {
        })).data)
    }, []);

    if (data) {
        return (
            <Container>
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
            </Container>
        )
    }
}
