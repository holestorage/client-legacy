import style from "./header-main.module.css";

export default function HeaderMain({ children, left }) {
    return (
        <div className={style.container}>
            <div>
                {children}
            </div>
            <div>
                {left}
            </div>
        </div>
    )
}
