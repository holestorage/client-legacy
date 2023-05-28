import style from "./full-banner-box.module.css";

export default function FullBannerBox({ children }) {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}
