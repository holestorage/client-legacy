import {Fragment, useEffect, useState} from "react";
import HeaderMain from "../../../../header/main/header-main";
import MainButton from "../../../../button/main/main-button";
import PathDisplay from "../../../path/display/path-display";
import {HoleApi} from "../../../../../../App";
import {useParams} from "react-router-dom";
import Container from "../../../../container/container";
import SectionContent from "../section/section-content";

export default function FolderContent({ fallback }) {
    const [data, setData] = useState(null);

    const { id } = useParams();

    const fetchContent = () => {
        HoleApi.get(`folder/${id}`).then(response => setData(response.data));
    };

    useEffect(() => fetchContent(), [id]);

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
                    <PathDisplay data={data.folder} />
                </HeaderMain>
                <SectionContent files={files} folders={folders} fallback={fallback} />
            </Container>
        )
    }
}
