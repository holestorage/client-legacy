import style from "./main-box.module.css";

export default function MainBox({ children }) {
    return (
        <div className={style.container}>
            <div className={style.content}>
                {children}
            </div>
        </div>
    )
}
