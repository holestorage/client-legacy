import {Route, Routes, useLocation} from "react-router-dom";

import NotFoundFallback from "../../pages/fallback/not-found-fallback";
import LoginContainer from "../../auth/container/login-container";
import RegisterContainer from "../../auth/container/register-container";

const config = {
    challenge: new Uint8Array(['ailakks']),
    rp: {
        name: "Example",
        id: "localhost",
    },
    user: {
        id: new Uint8Array(['ailakks']),
        name: "ailakks",
        displayName: "ailakks",
    },
    pubKeyCredParams: [{ alg: -7, type: "public-key" }, { alg: -257, type: "public-key" }],
    excludeCredentials: [{
        id: new ArrayBuffer(16),
        type: 'public-key',
        transports: ['internal'],
    }],
    authenticatorSelection: {
        authenticatorAttachment: "platform",
        requireResidentKey: true,
        userVerification: "required"
    }
};

export default function AuthView() {
    const location = useLocation();

    return (
        <Routes location={location}>
            <Route path="/login" element={<LoginContainer config={config} />}/>
            <Route path="/register" element={<RegisterContainer config={config} />}/>

            <Route path="/*" element={<NotFoundFallback />}/>
        </Routes>
    )
}
