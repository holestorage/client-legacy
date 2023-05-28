import style from "./page-container.module.css";

export default function PageContainer({ children }) {
    return (
        <div className={style.container}>
            <div className={style.content}>
                {children}
            </div>
        </div>
    )
}
