import FullContainer from "../../ui/container/content/full-container";
import MainBox from "../../ui/box/main/main-box";
import IconInput from "../../ui/input/icon/icon-input";
import MainButton from "../../ui/button/main/main-button";

import {useState} from "react";
import {cookies, HoleApi} from "../../../App";
import {Link, useNavigate} from 'react-router-dom';

const Access = {
    PASSWORD: "password",
    PASSKEY: "passkey"
};

export default function RegisterContainer() {
    const navigate = useNavigate();

    const [access, setAccess] = useState(null);

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [attempt, setAttempt] = useState(null);
    const [password, setPassword] = useState('');

    const register = async (event) => {
        event.preventDefault();

        const register = await (await HoleApi.post('user', {
            username: username,
            name: name,
            email: email
        })).data;

        setAttempt(register.attempt);
        setAccess(Access.PASSWORD);
    }

    const addPass = async (event) => {
        event.preventDefault();

        const response = await (await HoleApi.post('key/password', {
            attempt: attempt.key,
            key: password
        })).data;

        cookies.set('token', response.token, { path: '/' });
        navigate('/');
    }

    if (access === Access.PASSWORD) {
        return (
            <FullContainer>
                <MainBox>
                    <h4>Set a master password</h4>
                    <form onSubmit={addPass}>
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
                <p>Do you already have an account? <Link to="/auth/login">Login</Link></p>
            </MainBox>
        </FullContainer>
    )
}
