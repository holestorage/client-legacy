import SectionContent from "../section/section-content";

export default function CategoryContent({ category, fallback, ...props }) {
    return (
        <SectionContent path={`files/${category}`} fallback={fallback} { ...props } />
    )
}
