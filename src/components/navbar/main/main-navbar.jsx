import style from "./main-navbar.module.css";

import NavbarContainer from "../container/navbar-container";
import PagesList from "../../pages/list/pages-list";
import AuthBanner from "../../auth/banner/auth-banner";

export default function MainNavbar() {
    return (
        <NavbarContainer>
            <div className={style.container}>
                <div className={style.content}>
                    <PagesList inline />
                </div>
                <AuthBanner />
            </div>
        </NavbarContainer>
    )
}
