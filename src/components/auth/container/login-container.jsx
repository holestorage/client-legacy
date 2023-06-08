import FullContainer from "../../ui/container/content/full-container";
import MainBox from "../../ui/box/main/main-box";
import MainButton from "../../ui/button/main/main-button";
import MainHeader from "../../header/main/main-header";

export default function LoginContainer() {
    return (
        <FullContainer>
            <MainBox>
                <MainHeader>
                    <i className="fa-regular fa-key-skeleton" />
                </MainHeader>
                <p>Login with one click with your key</p>
                <MainButton text="Continue" />
                <p>You do not have an account? <a href="/auth/register">Sign up</a></p>
            </MainBox>
        </FullContainer>
    )
}
