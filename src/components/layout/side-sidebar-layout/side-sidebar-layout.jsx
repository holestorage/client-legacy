import style from "./side-sidebar-layout.module.css";

import MainLayout from "../main-layout/main-layout";
import Sidebar from "../sidebar-layout/sidebar/sidebar";

export default function SideSidebarLayout(props) {
    return (
        <MainLayout { ...props }>
            <div className={style.container}>
                <aside>
                    {props.side}
                </aside>
                <Sidebar { ...props }>
                    {props.children}
                </Sidebar>
            </div>
        </MainLayout>
    )
}
