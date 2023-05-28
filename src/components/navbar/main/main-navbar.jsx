import style from "./main-navbar.module.css";

import NavbarContainer from "../container/navbar-container";
import PagesList from "../../pages/list/pages-list";
import AuthBanner from "../../auth/banner/auth-banner";
import MainHead from "../../head/main/main-head";

export default function MainNavbar() {
    return (
        <NavbarContainer>
            <div className={style.container}>
                <MainHead />
                <div className={style.content}>
                    <PagesList inline />
                </div>
                <AuthBanner />
            </div>
        </NavbarContainer>
    )
}
