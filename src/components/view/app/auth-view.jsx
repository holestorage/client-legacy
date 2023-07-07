import {Route, Routes, useLocation} from "react-router-dom";

import NotFoundFallback from "../../pages/fallback/not-found-fallback";
import PasswordLoginContainer from "../../auth/container/password/password-login-container";

export default function AuthView() {
    const location = useLocation();

    return (
        <Routes location={location}>
            <Route path="/login" element={<PasswordLoginContainer />}/>
            <Route path="/register" element={<PasswordLoginContainer />}/>

            <Route path="/*" element={<NotFoundFallback />}/>
        </Routes>
    )
}
