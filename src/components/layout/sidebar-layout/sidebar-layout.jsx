import style from "./sidebar-layout.module.css";

import MainLayout from "../main-layout/main-layout";

export default function SidebarLayout({ head, header, side, left, children }) {
    return (
        <MainLayout head={head} header={header} side={side}>
            <div className={style.container}>
                <aside className={style.left}>
                    {left}
                </aside>
                <div className={style.content}>
                    {children}
                </div>
            </div>
        </MainLayout>
    )
}
