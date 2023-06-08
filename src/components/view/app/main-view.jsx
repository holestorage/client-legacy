import {Route, Routes, useLocation} from "react-router-dom";

import AppView from "./app-view";
import AuthView from "./auth-view";

export default function MainView() {
    const location = useLocation();

    return (
        <Routes location={location}>
            <Route path="/auth/*" element={<AuthView />}/>

            <Route path="/app/*" element={<AppView />}/>
        </Routes>
    )
}
