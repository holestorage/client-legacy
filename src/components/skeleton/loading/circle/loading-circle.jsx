import style from "./loading-circle.module.css";

export default function LoadCircle() {
    return (
        <div className={style.loader} >
            <svg className={style.circular_loader} viewBox="25 25 50 50">
                <circle className={style.loader_path} cx="50" cy="50" r="20" />
            </svg>
        </div>
    )
}
