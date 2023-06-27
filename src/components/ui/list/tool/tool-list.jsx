import style from "./tool-list.module.css";

import {Fragment, useContext} from "react";

import IconButton from "../../button/icon/icon-button";
import PopupDialog from "../../../popup/dialog/popup-dialog";
import {PopupContext} from "../../../provider/popup-provider";
import Loadable from "../../../skeleton/loadable/loadable";
import {useNavigate} from "react-router-dom";
import {HoleApi} from "../../../../App";
import { saveAs } from 'file-saver';

export default function ToolList({ accessible, data, filter }) {
    const list = [
        {
            list: [
                {
                    featured: true,
                    id: 'open',
                    name: 'Open',
                    icon: 'fa-regular fa-arrow-up-right-and-arrow-down-left-from-center',
                    action: (data) => open(data)
                },
                {
                    featured: true,
                    full: true,
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
                    id: 'share',
                    name: 'Share',
                    icon: 'fa-regular fa-user-plus'
                },
                {
                    id: 'send',
                    name: 'Send',
                    icon: 'fa-regular fa-link'
                }
            ]
        },
        {
            list: [
                {
                    id: 'pin',
                    name: 'Pin',
                    icon: 'fa-light fa-bookmark'
                },
                {
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
                    id: 'clone',
                    name: 'Clone',
                    icon: 'fa-regular fa-clone'
                },
                {
                    featured: true,
                    id: 'rename',
                    name: 'Rename',
                    icon: 'fa-regular fa-pen-to-square'
                },
                {
                    featured: true,
                    id: 'remove',
                    name: 'Remove',
                    icon: 'fa-regular fa-trash',
                    action: (data) => {
                        return HoleApi.patch(`file/${data.id}/trash`).then(ignored => {
                            close();
                        });
                    },
                    dialog: {
                        title: "Delete file",
                        body: "The file will be moved to trash. Are you sure?",
                        button: {
                            text: "Confirm",
                            style: "danger"
                        }
                    }
                }
            ]
        }
    ]

    const inaccessible = [
        {
            list: [
                {
                    featured: true,
                    id: 'open',
                    name: 'Open',
                    icon: 'fa-regular fa-arrow-up-right-and-arrow-down-left-from-center'
                },
                {
                    featured: true,
                    id: 'download',
                    name: 'Download',
                    icon: 'fa-regular fa-arrow-down-to-line',
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
                    featured: true,
                    id: 'remove',
                    name: 'Remove',
                    icon: 'fa-regular fa-trash',
                    action: (data) => {
                        return HoleApi.patch(`file/${data.id}/trash`).then(ignored => {
                            close();
                        });
                    },
                    dialog: {
                        title: "Delete file",
                        body: "The file will be moved to trash. Are you sure?",
                        button: {
                            text: "Confirm",
                            style: "danger"
                        }
                    }
                }
            ]
        }
    ]

    const navigate = useNavigate();
    const popupContext = useContext(PopupContext);

    const close = () => {
        popupContext.setCurrent(null)
    };

    const open = (data) => {
        if (accessible) {
            navigate(`/folder/${data.folder}/${data.id}`);
        }
    }

    return (
        <div className={style.container}>
            {
                (accessible ? list : inaccessible).map((value, key) =>
                    <div className={style.element} key={key}>
                        {
                            value.list.filter(filter).map((value, key) =>
                                <Fragment key={key}>
                                    <Loadable loadable={value.await} action={() => value.dialog ? popupContext.setCurrent(
                                        <PopupDialog title={value.dialog.title} body={value.dialog.body}
                                                     button={{ text: value.dialog.button.text, type: value.dialog.button.style, action: () => value.action(data) }} />) : value.action(data)}>
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
