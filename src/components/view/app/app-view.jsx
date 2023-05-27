import {Route, Routes, useLocation} from "react-router-dom";

import SidebarLayout from "../../layout/sidebar-layout/sidebar-layout";
import BoardPage from "../../pages/app/board-page";
import MainCategory from "../../ui/category/main/main-category";

const category = [
    {
        list: [
            {
                name: "Home",
                icon: 'fa-regular fa-house-blank'
            },
            {
                name: "Photos",
                icon: 'fa-regular fa-camera'
            },
            {
                name: "Pinned",
                icon: 'fa-regular fa-bookmark'
            }
        ]
    },
    {
        list: [
            {
                name: "Shared",
                icon: 'fa-regular fa-user-plus'
            },
            {
                name: "Recent",
                icon: 'fa-regular fa-clock'
            }
        ]
    },
    {
        list: [
            {
                name: "Bin",
                icon: 'fa-regular fa-trash'
            }
        ]
    },
    {
        list: [
            {
                name: "App",
                icon: 'fa-regular fa-mobile'
            },
            {
                name: "Help Desk",
                icon: 'fa-regular fa-book-blank'
            }
        ]
    }
]

export default function AppView() {
    const location = useLocation();

    return (
        <SidebarLayout header={<p>test</p>} head={<p>test</p>} side={<p>test</p>} left={<MainCategory list={category} />}>
            <Routes location={location}>
                <Route path="/" element={<BoardPage/>}/>
                <Route path="/trash" element={<BoardPage/>}/>
            </Routes>
        </SidebarLayout>
    )
}
