import FullContainer from "../../ui/container/content/full-container";
import MainBox from "../../ui/box/main/main-box";
import MainButton from "../../ui/button/main/main-button";
import IconInput from "../../ui/input/icon/icon-input";

import {HoleApi} from "../../../App";
import {useState} from "react";

export default function RegisterContainer({ config }) {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const register = async () => {
        const response = await HoleApi.post('user', new URLSearchParams({ username: username, name: name, email: email }));
        const key = await navigator.credentials.create({ publicKey: config });

        await HoleApi.post('key', new URLSearchParams({ attempt: response.data.attempt.key, id: key.id, key: key.rawId }));
    }

    return (
        <FullContainer>
            <MainBox>
                <h4>Register</h4>
                <IconInput placeholder="Username" type="text" value={username} onChange={ (value) => setUsername(value.target.value) } />
                <IconInput placeholder="Name" type="text" value={name} onChange={ (value) => setName(value.target.value) } />
                <IconInput placeholder="Email" type="email" value={email} onChange={ (value) => setEmail(value.target.value) }  />
                <MainButton text="Register" action={() => register()} />
                <p>Do you already have an account? <a href="/auth/login">Login</a></p>
            </MainBox>
        </FullContainer>
    )
}
