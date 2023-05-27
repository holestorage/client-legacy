import style from "./main-navbar.module.css";

import NavbarContainer from "../container/navbar-container";
import PagesList from "../../pages/list/pages-list";

export default function MainNavbar() {
    return (
        <NavbarContainer>
            <div className={style.container}>
                <div>

                </div>
                <PagesList inline />
                <div>

                </div>
            </div>
        </NavbarContainer>
    )
}
