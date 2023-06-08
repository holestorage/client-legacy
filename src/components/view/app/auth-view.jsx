import {Route, Routes, useLocation} from "react-router-dom";

import NotFoundFallback from "../../pages/fallback/not-found-fallback";
import LoginContainer from "../../auth/container/login-container";
import RegisterContainer from "../../auth/container/register-container";

const keyConfig = {
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

const register = async () => {
    await navigator.credentials.create({ publicKey: keyConfig });
}

const login = async () => {
    await navigator.credentials.get({ publicKey: keyConfig });
}

export default function AuthView() {
    const location = useLocation();

    return (
        <Routes location={location}>
            <Route path="/login" element={<LoginContainer action={login} />}/>
            <Route path="/register" element={<RegisterContainer action={register} />}/>

            <Route path="/*" element={<NotFoundFallback />}/>
        </Routes>
    )
}
