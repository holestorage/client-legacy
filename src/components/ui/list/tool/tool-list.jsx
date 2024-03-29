import style from "./tool-list.module.css";

import {Fragment, useContext} from "react";

import IconButton from "../../button/icon/icon-button";
import PopupDialog from "../../../popup/dialog/popup-dialog";
import Loadable from "../../../skeleton/loadable/loadable";
import {HoleApi} from "../../../../App";
import { saveAs } from 'file-saver';
import {PopupContext} from "../../../../provider/popup-provider";

export default function ToolList({ data, filter, open, close }) {
    const popupContext = useContext(PopupContext);

    const list = [
        {
            list: [
                {
                    featured: true,
                    inaccessible: true,
                    id: 'open',
                    name: 'Open',
                    icon: 'fa-regular fa-arrow-up-right-and-arrow-down-left-from-center',
                    action: (data) => open(data)
                },
                {
                    featured: true,
                    full: true,
                    inaccessible: true,
                    id: 'download',
                    name: 'Download',
                    icon: 'fa-regular fa-arrow-down-to-line',
                    await: true,
                    action: (data) => {
                        return HoleApi.get(`file/${data.id}/raw`).then(response => {
                            saveAs(new Blob([response.data]), data.name);
                        })
                    }
                }
            ]
        },
        {
            list: [
                {
                    full: true,
                    id: 'share',
                    name: 'Share',
                    icon: 'fa-regular fa-user-plus'
                },
                {
                    full: true,
                    id: 'send',
                    name: 'Send',
                    icon: 'fa-regular fa-link'
                }
            ]
        },
        {
            list: [
                {
                    full: true,
                    id: 'pin',
                    name: 'Pin',
                    icon: 'fa-light fa-bookmark'
                },
                {
                    full: true,
                    id: 'color',
                    name: 'Color',
                    icon: 'fa-regular fa-palette'
                },
            ]
        },
        {
            list: [
                {
                    featured: true,
                    full: true,
                    id: 'clone',
                    name: 'Clone',
                    icon: 'fa-regular fa-clone'
                },
                {
                    featured: true,
                    full: true,
                    id: 'rename',
                    name: 'Rename',
                    icon: 'fa-regular fa-pen-to-square'
                },
                {
                    featured: true,
                    inaccessible: true,
                    full: true,
                    id: 'remove',
                    name: 'Remove',
                    icon: 'fa-regular fa-trash',
                    action: (data) => {
                        return HoleApi.patch(`file/${data.id}/trash`).then(ignored => {
                            close();
                        });
                    },
                    dialog: {
                        title: "Move to trash?",
                        button: {
                            text: "Confirm",
                            style: "danger"
                        }
                    }
                }
            ]
        }
    ]

    const handleClick = (event, value) => {
        event.stopPropagation();
        return handleAction(value);
    }

    const handleAction = (value) => {
        if (value.dialog) {
            return popupContext.setCurrent(
                <PopupDialog title={value.dialog.title}
                             body={value.dialog.body}
                             button={{ text: value.dialog.button.text, type: value.dialog.button.style, action: () => value.action(data) }}
                />
            )
        }

        return value.action(data);
    }

    return (
        <div className={style.container}>
            {
                list.map((value, key) =>
                    <div className={style.element} key={key}>
                        {
                            value.list.filter(filter).map((value, key) =>
                                <Fragment key={key}>
                                    <Loadable loadable={value.await} action={(event) => handleClick(event, value)}>
                                        <IconButton icon={value.icon} />
                                    </Loadable>
                                </Fragment>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}
