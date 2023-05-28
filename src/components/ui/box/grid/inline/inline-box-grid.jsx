import style from "./inline-box-grid.module.css";

export default function InlineBoxGrid({ children }) {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}
