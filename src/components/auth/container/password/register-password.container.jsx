import FullContainer from "../../ui/container/content/full-container";
import MainBox from "../../ui/box/main/main-box";
import IconInput from "../../ui/input/icon/icon-input";

import {HoleApi} from "../../../App";
import {useState} from "react";
import MainButton from "../../ui/button/main/main-button";

import {useCookies} from "react-cookie";

export default function RegisterContainer() {
    const [token, setToken, removeToken] = useCookies(['token']);

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const register = async (event) => {
        event.preventDefault();

        const register = await (await HoleApi.post('user', {
            username: username,
            name: name,
            email: email
        })).data;

        setToken(register.token);
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
                    <MainButton text="Register" submit={register} />
                </form>
                <p>Do you already have an account? <a href="/auth/login">Login</a></p>
            </MainBox>
        </FullContainer>
    )
}
