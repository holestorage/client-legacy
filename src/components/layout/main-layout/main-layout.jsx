import style from "./main-layout.module.css";

import {Fragment} from "react";

export default function MainLayout({header, head, side, children}) {
    return (
        <Fragment>
            <div className={[side ?? style.complete, style.container].join(" ")}>
                {
                    head && <div className={style.head}>
                        {head}
                    </div>
                }
                <header className={style.header}>
                    {header}
                </header>
                {
                    side && <aside className={style.side}>
                        {side}
                    </aside>
                }
                <div>
                    {children}
                </div>
            </div>
        </Fragment>
    )
}
