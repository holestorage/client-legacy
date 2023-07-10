import {useNavigate} from 'react-router-dom';
import MainBox from "../../../ui/box/main/main-box";
import MainButton from "../../../ui/button/main/main-button";
import {HoleApi} from "../../../../App";
import Form from "../../../../context/form";
import Input from "../../../../context/input";
import Cookies from "js-cookie";

export default function PasswordLoginContainer() {
    const navigate = useNavigate();

    const login = async (data) => {
        return await HoleApi.post('user/login', data)
            .then((response) => response.data)
            .then((data) => Cookies.set('token', data.token, { path: '/' }))
            .then((navigate('/')));
    };

    return (
        <MainBox>
            <Form onSubmit={login}>
                <Input name="email" type="email" placeholder="Email" />
                <Input name="key" type="password" placeholder="Password" />
                <MainButton type="submit" text="Continue"/>
            </Form>
        </MainBox>
    );
}
