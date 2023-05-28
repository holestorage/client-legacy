import style from "./sidebar.module.css";

export default function Sidebar(props) {
    return (
        <div className={style.container}>
            <aside className={style.left}>
                {props.left}
            </aside>
            <div className={style.content}>
                {props.children}
            </div>
        </div>
    )
}
