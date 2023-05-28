import style from "./main-layout.module.css";

export default function MainLayout({ header, children }) {
    return (
        <div className={style.container}>
            <header className={style.header}>
                {header}
            </header>
            <div className={style.content}>
                {children}
            </div>
        </div>
    )
}
