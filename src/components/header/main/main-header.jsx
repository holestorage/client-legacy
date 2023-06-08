import style from "./main-header.module.css";

export default function MainHeader({ children }) {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}
