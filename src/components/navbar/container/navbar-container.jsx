import style from "./navbar-container.module.css";

export default function NavbarContainer({ children }) {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}
