import style from "./tool-list.module.css";

import {Fragment, useContext} from "react";

import IconButton from "../../button/icon/icon-button";
import PopupDialog from "../../../popup/dialog/popup-dialog";
import {PopupContext} from "../../../provider/popup-provider";

export default function ToolList({ section }) {
    const popupContext = useContext(PopupContext);

    return (
        <div className={style.container}>
            {
                section.map((value, key) =>
                    <div className={style.element} key={key}>
                        {
                            value.list.map((value, key) =>
                                <Fragment key={key}>
                                    <IconButton icon={value.icon}
                                        action={() => value.dialog && popupContext.setCurrent(<PopupDialog title={value.dialog.title} body={value.dialog.body} />)} />
                                </Fragment>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}
