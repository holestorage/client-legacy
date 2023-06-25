import SectionContent from "../section/section-content";

export default function CategoryContent({ category, fallback, ...props }) {
    return (
        <SectionContent accessible={!["trash"].includes(category)} path={`files/${category}`} fallback={fallback} { ...props } />
    )
}
