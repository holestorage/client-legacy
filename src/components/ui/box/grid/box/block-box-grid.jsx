import style from "./block-box-grid.module.css";

export default function BlockBoxGrid({ children }) {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}
