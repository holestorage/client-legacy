import style from "./page-container.module.css";

export default function PageContainer({ color, children }) {
    return (
        <div className={style.container} style={{ background: color }}>
            <div className={style.content}>
                {children}
            </div>
        </div>
    )
}
