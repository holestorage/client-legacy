import MainLayout from "../../layout/main-layout/main-layout";
import {Route, Routes, useLocation} from "react-router-dom";
import HomePage from "../../pages/home-page";

export default function HomeView() {
    const location = useLocation();

    return (
        <MainLayout header={<p>test</p>} head={<p>test</p>}>
            <Routes location={location}>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </MainLayout>
    )
}
