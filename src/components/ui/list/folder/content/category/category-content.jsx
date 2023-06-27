import SectionContent from "../section/section-content";

export default function CategoryContent({ category, fallback, ...props }) {
    return (
        <SectionContent accessible={!["trash"].includes(category)} filter={["trash"].includes(category) ? item => item.inaccessible : item => item.featured} path={`files/${category}`} fallback={fallback} { ...props } />
    )
}
