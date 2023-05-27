import style from "./tool-list.module.css";

import {Fragment} from "react";

export default function ToolList({ section }) {
    return (
        <div className={style.container}>
            {
                section.map((value, key) =>
                    <div key={key}>
                        {
                            value.list.map((value, key) =>
                                <Fragment key={key}>
                                    <p></p>
                                </Fragment>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}
