import SidebarLayout from "../../layout/sidebar-layout/sidebar-layout";
import {Route, Routes, useLocation} from "react-router-dom";
import BoardPage from "../../pages/app/board-page";

export default function AppView() {
    const location = useLocation();

    return (
        <SidebarLayout header={<p>test</p>} head={<p>test</p>} side={<p>test</p>} left={<p>test</p>}>
            <Routes location={location}>
                <Route path="/" element={<BoardPage/>}/>
            </Routes>
        </SidebarLayout>
    )
}
