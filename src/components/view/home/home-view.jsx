import {Route, Routes, useLocation} from "react-router-dom";

import MainLayout from "../../layout/main-layout/main-layout";
import HomePage from "../../pages/home-page";
import MainNavbar from "../../navbar/main/main-navbar";
import MainHead from "../../head/main/main-head";
import NotFoundFallback from "../../pages/fallback/not-found-fallback";
import PricingPage from "../../pages/pricing-page";

export default function HomeView() {
    const location = useLocation();

    return (
        <MainLayout header={<MainNavbar />} head={<MainHead />}>
            <Routes location={location}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/pricing" element={<PricingPage/>}/>

                <Route path="/*" element={<NotFoundFallback/>}/>
            </Routes>
        </MainLayout>
    )
}
