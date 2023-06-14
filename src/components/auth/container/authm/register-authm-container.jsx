import FullContainer from "../../../ui/container/content/full-container";
import MainBox from "../../../ui/box/main/main-box";
import MainButton from "../../../ui/button/main/main-button";
import MainHeader from "../../../header/main/main-header";
import {HoleApi} from "../../../../App";

import {useCookies} from "react-cookie";
import {client} from "webauthn-prf";

export default function LoginAuthmContainer({ username, name, email }) {
    const [token, setToken, removeToken] = useCookies(['token']);

    const register = async () => {
        const account = await (await HoleApi.post('user', {
            username: username,
            name: name,
            email: email
        })).data;

        const register = await client.register("Arnaud", "a7c61ef9-dc23-4806-b486-2428938a547e", {
            "authenticatorType": "local",
            "userVerification": "required",
            "timeout": 60000,
            "attestation": false,
            "debug": false
        });

        const login = await (await HoleApi.post('key', {
            attempt: account.attempt.key,
            key: register
        })).data;

        setToken(login.token);

        setToken(login.token);
    }

    return (
        <FullContainer>
            <MainBox>
                <MainHeader>
                    <i className="fa-regular fa-key-skeleton" />
                </MainHeader>
                <p>Login with one click with your key</p>
                <MainButton text="Continue" action={register} />
                <p>You do not have an account? <a href="/auth/register">Sign up</a></p>
            </MainBox>
        </FullContainer>
    )
}
