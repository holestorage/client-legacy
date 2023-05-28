import style from "./banner-box.module.css";

export default function BannerBox({ children }) {
    return (
        <div className={style.container}>
            <div className={style.content}>
                {children}
            </div>
        </div>
    )
}
