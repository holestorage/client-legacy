import style from "./card-list.module.css";

export default function CardList({ children }) {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}
