import style from "./inline-display.module.css";

export default function InlineDisplay({ children }) {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}
