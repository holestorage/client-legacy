import style from "./tool-list.module.css";

import {Fragment, useContext} from "react";

import IconButton from "../../button/icon/icon-button";
import PopupDialog from "../../../popup/dialog/popup-dialog";
import {PopupContext} from "../../../provider/popup-provider";

export default function ToolList({ data, section }) {
    const popupContext = useContext(PopupContext);

    return (
        <div className={style.container}>
            {
                section.map((value, key) =>
                    <div className={style.element} key={key}>
                        {
                            value.list.map((value, key) =>
                                <Fragment key={key}>
                                    <IconButton icon={value.icon} loadable action={() => value.dialog ? popupContext.setCurrent(
                                        <PopupDialog title={value.dialog.title} body={value.dialog.body}
                                                     button={{ text: value.dialog.button.text, type: value.dialog.button.style, action: () => value.action(data) }} />) : value.action(data)}/>
                                </Fragment>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}
