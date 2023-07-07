import {useNavigate} from 'react-router-dom';
import MainBox from "../../../ui/box/main/main-box";
import MainButton from "../../../ui/button/main/main-button";
import {cookies, HoleApi} from "../../../../App";
import Form from "../../../../context/form";
import Input from "../../../../context/input";

export default function PasswordRegisterContainer() {
    const navigate = useNavigate();

    const login = async (data) => {
        return await HoleApi.post('user', data)
            .then((response) => response.data)
            .then((data) => data.attempt.key)
            .then(async (key) => {
                await HoleApi.post('key/password', {attempt: key, key: data.key})
                    .then((response) => response.data)
                    .then((data) => cookies.set('token', data.token))
                    .then((navigate('/')));
            })
    };

    return (
        <MainBox>
            <Form onSubmit={login}>
                <Input name="name" type="text" placeholder="Name" />
                <Input name="email" type="email" placeholder="Email" />
                <Input name="key" type="password" placeholder="Password" />
                <MainButton type="submit" text="Continue"/>
            </Form>
        </MainBox>
    );
}
