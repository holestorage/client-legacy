import MainButton from "../../ui/button/main/main-button";
import Container from "../../ui/container/container";
import HeaderMain from "../../ui/header/main/header-main";
import {Fragment} from "react";

export default function BoardPage() {
    return (
        <Container>
            <HeaderMain left={
                <Fragment>
                    <MainButton text="Upload file" />
                    <MainButton text="Create folder" />
                </Fragment>
            }>
            </HeaderMain>

        </Container>
    )
}
