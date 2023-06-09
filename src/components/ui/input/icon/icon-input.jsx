import style from "./icon-input.module.css";

export default function IconInput(props) {
    return (
        <div className={style.container}>
            <input { ...props } />
            <i className={props.icon} />
        </div>
    )
}
