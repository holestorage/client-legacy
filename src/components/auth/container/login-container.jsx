import FullContainer from "../../ui/container/content/full-container";
import MainBox from "../../ui/box/main/main-box";
import MainButton from "../../ui/button/main/main-button";
import MainHeader from "../../header/main/main-header";
import {HoleApi} from "../../../App";
import {useCookies} from "react-cookie";

export default function LoginContainer({ config }) {
    const [token, setToken, removeToken] = useCookies(['token']);

    const login = async () => {
        const key = await navigator.credentials.get({
            publicKey: await config()
        });

        const publicKey = btoa(String.fromCharCode.apply(null, new Uint8Array(key.response.getPublicKey())));

        const login = await (await HoleApi.post('login', {
            id: key.id,
            key: publicKey
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
