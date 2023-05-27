import {Route, Routes, useLocation} from "react-router-dom";

import MainLayout from "../../layout/main-layout/main-layout";
import HomePage from "../../pages/home-page";
import MainNavbar from "../../navbar/main/main-navbar";

export default function HomeView() {
    const location = useLocation();

    return (
        <MainLayout header={<MainNavbar />} head={<p>test</p>}>
            <Routes location={location}>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </MainLayout>
    )
}
