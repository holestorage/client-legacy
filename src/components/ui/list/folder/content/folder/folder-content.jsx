import {useParams} from "react-router-dom";
import SectionContent from "../section/section-content";

export default function FolderContent(props) {
    const { id } = useParams();

    return (
        <SectionContent { ...props } path={`folder/${id}`} />
    )
}
