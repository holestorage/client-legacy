import style from "./container.module.css";

export default function Container({ className, children }) {
    return (
        <div className={[className, style.container].join(' ')}>
            {children}
        </div>
    )
}
