import style from "./login-banner.module.css";

import MainButton from "../../../ui/button/main/main-button";

export default function LoginBanner() {
    return (
        <div className={style.container}>
            <MainButton text="Login" />
            <MainButton text="Register" />
        </div>
    )
}
