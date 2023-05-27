import style from "./main-navbar.module.css";

import {Fragment} from "react";

const list = [
    {

    }
]

export default function MainLayout() {
    return (
        <Fragment>
            {
                list.map((value, key) =>
                    <Fragment key={key}>
                    </Fragment>
                )
            }
        </Fragment>
    )
}
