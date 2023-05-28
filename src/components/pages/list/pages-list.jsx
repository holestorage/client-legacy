import InlinePageList from "./grid/inline/inline-page-list";
import BlockPageList from "./block/block-page-list";

const list = [
    {
        name: "Home",
        icon: 'fa-regular fa-house-blank',
        path: '/'
    },
    {
        name: "Drive",
        icon: 'fa-regular fa-hard-drive',
        path: '/app/'
    },
    {
        name: "Pricing",
        icon: 'fa-regular fa-gear',
        path: '/pricing'
    },
    {
        name: "Privacy",
        icon: 'fa-regular fa-shield-check',
        path: '/privacy'
    },
    {
        name: "Account",
        icon: 'fa-regular fa-user',
        path: '/app/account'
    }
]

export default function PagesList({ inline }) {
    return (inline ? <InlinePageList list={list} /> : <BlockPageList list={list} />)
}
