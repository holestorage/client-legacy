import style from "./app-navbar.module.css";

import SearchFilesInput from "../../ui/input/icon/input/search-files-input";
import AuthBanner from "../../auth/banner/auth-banner";
import NavbarContainer from "../container/navbar-container";
import MainHead from "../../head/main/main-head";

export default function AppNavbar() {
    return (
        <NavbarContainer>
            <div className={style.container}>
                <MainHead />
                <div className={style.content}>
                    <SearchFilesInput />
                </div>
                <AuthBanner />
            </div>
        </NavbarContainer>
    )
}
