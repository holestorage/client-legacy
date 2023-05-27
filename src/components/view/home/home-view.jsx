import {Route, Routes, useLocation} from "react-router-dom";

import MainLayout from "../../layout/main-layout/main-layout";
import HomePage from "../../pages/home-page";
import MainNavbar from "../../navbar/main/main-navbar";
import MainHead from "../../head/main/main-head";
import {Fragment} from "react";

export default function HomeView() {
    const location = useLocation();

    return (
        <MainLayout header={<MainNavbar />} head={<MainHead />} side={<Fragment></Fragment>}>
            <Routes location={location}>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </MainLayout>
    )
}
