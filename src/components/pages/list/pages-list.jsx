import InlinePageList from "./inline/inline-page-list";
import BlockPageList from "./block/block-page-list";

const list = [
    {
        name: "Home",
        icon: 'fa-regular fa-house-blank',
        path: '/'
    },
    {
        name: "Drive",
        icon: 'fa-regular fa-house-blank',
        path: '/drive'
    },
    {
        name: "Pricing",
        icon: 'fa-regular fa-house-blank',
        path: '/pricing'
    },
    {
        name: "About",
        icon: 'fa-regular fa-house-blank',
        path: '/about'
    }
]

export default function PagesList({ inline }) {
    return (inline ? <InlinePageList list={list} /> : <BlockPageList list={list} />)
}
