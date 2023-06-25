import {useParams} from "react-router-dom";
import SectionContent from "../section/section-content";

export default function CategoryContent({ category, fallback }) {
    return (
        <SectionContent path={`files/${category}`} fallback={fallback} />
    )
}
