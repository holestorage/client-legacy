import FullContainer from "../../ui/container/content/full-container";
import MainBox from "../../ui/box/main/main-box";
import MainButton from "../../ui/button/main/main-button";
import MainHeader from "../../header/main/main-header";
import {HoleApi} from "../../../App";

import {useCookies} from "react-cookie";
import {client} from "webauthn-prf";

export default function LoginContainer() {
    const [token, setToken, removeToken] = useCookies(['token']);

    const login = async () => {
        const auth = await client.authenticate(["jQ_2z9l1ejR-Lqn4F2nPHO2sAqLAfF0IjfmxoFHI4ks"], "a7c61ef9-dc23-4806-b486-2428938a547e", {
            "authenticatorType": "auto",
            "userVerification": "required",
            "timeout": 60000
        });

        console.log(auth)

        const login = await (await HoleApi.post('user/login', {
            id: auth.credentialId,
            key: auth
        })).data;

        setToken(login.token);
    }

    return (
        <FullContainer>
            <MainBox>
                <MainHeader>
                    <i className="fa-regular fa-key-skeleton" />
                </MainHeader>
                <p>Login with one click with your key</p>
                <MainButton text="Continue" action={login} />
                <p>You do not have an account? <a href="/auth/register">Sign up</a></p>
            </MainBox>
        </FullContainer>
    )
}
