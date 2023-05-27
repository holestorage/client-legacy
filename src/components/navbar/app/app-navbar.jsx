import style from "./app-navbar.module.css";
import SearchFilesInput from "../../ui/input/icon/input/search-files-input";

export default function AppNavbar() {
    return (
        <div className={style.container}>
            <SearchFilesInput />
        </div>
    )
}
