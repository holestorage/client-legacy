import style from "./banner-box.module.css";

export default function BannerBox({ children }) {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}
