import {Route, Routes, useLocation} from "react-router-dom";

import SidebarLayout from "../../layout/sidebar-layout/sidebar-layout";
import BoardPage from "../../pages/app/board-page";
import MainCategory from "../../ui/category/main/main-category";
import FilesFallback from "../../pages/fallback/files-fallback";
import TrashFallback from "../../pages/fallback/trash-fallback";
import AppNavbar from "../../navbar/app/app-navbar";
import MainSidebar from "../../sidebar/main/main-sidebar";
import MainHead from "../../head/main/main-head";
import PhotosFallback from "../../pages/fallback/photos-fallback";
import AppContainer from "../../navbar/container/content/app/app-container";

const category = [
    {
        list: [
            {
                name: "Home",
                icon: 'fa-regular fa-house-blank',
                path: '/app/'
            },
            {
                name: "Photos",
                icon: 'fa-regular fa-camera',
                path: 'photos'
            },
            {
                name: "Pinned",
                icon: 'fa-regular fa-bookmark',
                path: 'pinned'
            }
        ]
    },
    {
        list: [
            {
                name: "Shared",
                icon: 'fa-regular fa-user-plus',
                path: 'shared'
            },
            {
                name: "Recent",
                icon: 'fa-regular fa-clock',
                path: 'recent'
            }
        ]
    },
    {
        list: [
            {
                name: "Trash",
                icon: 'fa-regular fa-trash',
                path: 'trash'
            }
        ]
    },
    {
        list: [
            {
                name: "App",
                icon: 'fa-regular fa-mobile',
                path: 'mobile'
            },
            {
                name: "Help Desk",
                icon: 'fa-regular fa-book-blank',
                path: 'help'
            }
        ]
    }
]

export default function AppView() {
    const location = useLocation();

    return (
        <SidebarLayout header={<AppNavbar />} head={<MainHead />} side={<MainSidebar />} left={<MainCategory list={category} />}>
            <Routes location={location}>
                <Route path="/" element={<BoardPage fallback={<FilesFallback />} />}/>
                <Route path="/photos" element={<BoardPage fallback={<PhotosFallback />} />}/>
                <Route path="/pinned" element={<BoardPage fallback={<FilesFallback />} />}/>
                <Route path="/shared" element={<BoardPage fallback={<FilesFallback />} />}/>
                <Route path="/recent" element={<BoardPage fallback={<FilesFallback />} />}/>
                <Route path="/trash" element={<BoardPage fallback={<TrashFallback />} />}/>

                <Route path="/mobile" element={<AppContainer />}/>
            </Routes>
        </SidebarLayout>
    )
}
