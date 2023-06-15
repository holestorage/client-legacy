import {Fragment, useEffect, useState} from "react";
import {Container} from "@chakra-ui/react";
import HeaderMain from "../../../header/main/header-main";
import MainButton from "../../../button/main/main-button";
import PathDisplay from "../../path/display/path-display";
import FileList from "../../file/file-list";
import FolderList from "../folder-list";
import {HoleApi} from "../../../../../App";
import {useParams} from "react-router-dom";

export default function FolderContent({ fallback }) {
    const [data, setData] = useState(null);

    const { id } = useParams();

    const fetchContent = () => {
        HoleApi.get(`folder/${id}`).then(response => setData(response.data));
    }

    useEffect(() => {
        fetchContent();
    }, [id]);

    if (data) {
        const files = data.folder.files;
        const folders = data.folder.folders;

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
                {folders.length > 0 && <FolderList list={folders} />}
                {files.length > 0 ? <FileList list={files} /> : fallback}
            </Container>
        )
    }
}
