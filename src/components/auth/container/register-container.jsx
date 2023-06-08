import FullContainer from "../../ui/container/content/full-container";
import MainBox from "../../ui/box/main/main-box";
import MainButton from "../../ui/button/main/main-button";
import MainHeader from "../../header/main/main-header";

export default function RegisterContainer({ action }) {
    return (
        <FullContainer>
            <MainBox>
                <MainHeader>
                    <i className="fa-regular fa-key-skeleton" />
                </MainHeader>
                <p>Register with one click with your key</p>
                <MainButton text="Continue" action={action} />
                <p>Do you already have an account? <a href="/auth/login">Login</a></p>
            </MainBox>
        </FullContainer>
    )
}
