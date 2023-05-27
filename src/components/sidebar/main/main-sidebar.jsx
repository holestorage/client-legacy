import style from "./main-sidebar.module.css";

import PagesList from "../../pages/list/pages-list";

export default function MainSidebar() {
    return (
        <div className={style.container}>
            <PagesList />
        </div>
    )
}
