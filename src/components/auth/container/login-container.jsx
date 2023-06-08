import FullContainer from "../../ui/container/content/full-container";
import MainBox from "../../ui/box/main/main-box";
import MainButton from "../../ui/button/main/main-button";

export default function LoginContainer() {
    return (
        <FullContainer>
            <MainBox>
                <h3>Login</h3>
                <MainButton text="Continue" />
            </MainBox>
        </FullContainer>
    )
}
