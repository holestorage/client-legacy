import {useNavigate} from 'react-router-dom';
import MainBox from "../../../ui/box/main/main-box";
import MainButton from "../../../ui/button/main/main-button";
import {cookies, HoleApi} from "../../../../App";
import Form from "../../../../context/form";
import Input from "../../../../context/input";

export default function PasswordLoginContainer() {
    const navigate = useNavigate();

    const login = async (data) => {
        return await HoleApi.post('user/login', data)
            .then((response) => response.data)
            .then((data) => cookies.set('token', data.token))
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
