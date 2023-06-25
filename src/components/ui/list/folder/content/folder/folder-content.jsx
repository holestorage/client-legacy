import {useParams} from "react-router-dom";
import SectionContent from "../section/section-content";
import FilesFallback from "../../../../../pages/fallback/files-fallback";

export default function FolderContent() {
    const { folder } = useParams();

    return (
        <SectionContent accessible path={`folder/${folder}`} fallback={<FilesFallback />} />
    )
}
