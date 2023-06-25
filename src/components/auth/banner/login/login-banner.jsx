import style from "./login-banner.module.css";

import MainButton from "../../../ui/button/main/main-button";
import {Link} from "react-router-dom";

export default function LoginBanner() {
    return (
        <div className={style.container}>
            <Link to="/auth/login">
                <MainButton text="Login" />
            </Link>
            <Link to="/auth/register">
                <MainButton text="Register" />
            </Link>
        </div>
    )
}
