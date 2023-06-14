import FullContainer from "../../ui/container/content/full-container";
import MainBox from "../../ui/box/main/main-box";
import IconInput from "../../ui/input/icon/icon-input";
import MainButton from "../../ui/button/main/main-button";

import {useState} from "react";
import {HoleApi} from "../../../App";
import {useCookies} from "react-cookie";

const Access = {
    PASSWORD: "password",
    PASSKEY: "passkey"
};

export default function RegisterContainer() {
    const [access, setAccess] = useState(null);

    const [token, setToken, removeToken] = useCookies(['token']);

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const register = async (event) => {
        event.preventDefault();

        const register = await (await HoleApi.post('user', {
            username: username,
            name: name,
            email: email
        })).data;

        setAccess(Access.PASSWORD);
    }

    if (access === Access.PASSWORD) {
        return (
            <FullContainer>
                <MainBox>
                    <h4>Set a master password</h4>
                    <form onSubmit={register}>
                        <IconInput placeholder="Password" type="password" value={password}
                                   onChange={(value) => setPassword(value.target.value)}/>
                    </form>
                </MainBox>
            </FullContainer>
        )
    }

    return (
        <FullContainer>
            <MainBox>
                <h4>Register</h4>
                <form onSubmit={register}>
                    <IconInput placeholder="Username" type="text" value={username}
                               onChange={(value) => setUsername(value.target.value)}/>
                    <IconInput placeholder="Name" type="text" value={name}
                               onChange={(value) => setName(value.target.value)}/>
                    <IconInput placeholder="Email" type="email" value={email}
                               onChange={(value) => setEmail(value.target.value)}/>
                    <MainButton text="Register" />
                </form>
                <p>Do you already have an account? <a href="/auth/login">Login</a></p>
            </MainBox>
        </FullContainer>
    )
}
