import style from "./main-card.module.css";

export default function MainCard({ children }) {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}
