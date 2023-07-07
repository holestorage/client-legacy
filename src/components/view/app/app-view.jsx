import {Route, Routes, useLocation} from "react-router-dom";

import BoardPage from "../../pages/app/board-page";
import MainCategory from "../../ui/category/main/main-category";
import FilesFallback from "../../pages/fallback/files-fallback";
import AppNavbar from "../../navbar/app/app-navbar";
import MainSidebar from "../../sidebar/main/main-sidebar";
import MainHead from "../../head/main/main-head";
import PhotosFallback from "../../pages/fallback/photos-fallback";
import AppContainer from "../../ui/container/content/app/app-container";
import NotFoundFallback from "../../pages/fallback/not-found-fallback";
import SideSidebarLayout from "../../layout/side-sidebar-layout/side-sidebar-layout";
import FolderContent from "../../ui/list/folder/content/folder/folder-content";
import CategoryContent from "../../ui/list/folder/content/category/category-content";

const category = [
    {
        list: [
            {
                name: "Home",
                icon: 'fa-regular fa-house-blank',
                path: '/'
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
        <SideSidebarLayout header={<AppNavbar app />} head={<MainHead />} side={<MainSidebar />} left={<MainCategory list={category} />}>
            <Routes location={location}>
                <Route path="/" element={<BoardPage fallback={<FilesFallback />} />}/>
                <Route path="/folder/:folder" element={<FolderContent />}/>
                <Route path="/folder/:folder/:file" element={<FolderContent />}/>
                <Route path="/photos" element={<BoardPage fallback={<PhotosFallback />} />}/>

                <Route path="/pinned" element={<BoardPage fallback={<FilesFallback />} />}/>
                <Route path="/shared" element={<BoardPage fallback={<FilesFallback />} />}/>
                <Route path="/recent" element={<CategoryContent title="Recent" category="recent" />} />
                <Route path="/trash" element={<CategoryContent title="Trash" category="trash" />}/>

                <Route path="/mobile" element={<AppContainer />}/>

                <Route path="/mobile" element={<AppContainer />}/>

                <Route path="/*" element={<NotFoundFallback />}/>
            </Routes>
        </SideSidebarLayout>
    )
}
