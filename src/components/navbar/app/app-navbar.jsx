import style from "./app-navbar.module.css";

import SearchFilesInput from "../../ui/input/icon/input/search-files-input";
import AuthBanner from "../../auth/banner/auth-banner";

export default function AppNavbar() {
    return (
        <div className={style.container}>
            <SearchFilesInput />
            <AuthBanner />
        </div>
    )
}
