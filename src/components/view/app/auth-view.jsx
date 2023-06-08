import {Route, Routes, useLocation} from "react-router-dom";

import NotFoundFallback from "../../pages/fallback/not-found-fallback";
import LoginContainer from "../../auth/container/login-container";

export default function AuthView() {
    const location = useLocation();

    return (
        <Routes location={location}>
            <Route path="/login" element={<LoginContainer />}/>

            <Route path="/*" element={<NotFoundFallback />}/>
        </Routes>
    )
}
