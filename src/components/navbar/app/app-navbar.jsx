import style from "./app-navbar.module.css";

import SearchFilesInput from "../../ui/input/icon/input/search-files-input";
import AuthBanner from "../../auth/banner/auth-banner";
import NavbarContainer from "../container/navbar-container";

export default function AppNavbar() {
    return (
        <NavbarContainer>
            <div className={style.container}>
                <div className={style.content}>
                    <SearchFilesInput />
                </div>
                <AuthBanner />
            </div>
        </NavbarContainer>
    )
}
