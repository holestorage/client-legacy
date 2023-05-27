import style from "./container-content.module.css";

export default function ContainerContent({ title, icon }) {
    return (
        <div className={style.container}>
            <i className={icon} />
            <h1>{title}</h1>
        </div>
    )
}
