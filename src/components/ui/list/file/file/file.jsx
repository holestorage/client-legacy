import {HoleApi} from "../../../../../App";
import { saveAs } from 'file-saver';
import FileBox from "./box/file-box";
import {useContext} from "react";
import {PopupContext} from "../../../../provider/popup-provider";
import {useNavigate, useParams} from "react-router-dom";

export default function File({ accessible, ...props }) {
    const navigate = useNavigate();

    const { folder } = useParams();

    const popupContext = useContext(PopupContext);

    const close = () => {
        popupContext.setCurrent(null)
    };

    const open = (id) => {
        navigate(`/folder/${folder}/${id}`)
    }

    const list = [
        {
            featured: true,
            list: [
                {
                    id: 'open',
                    name: 'Open',
                    icon: 'fa-regular fa-arrow-up-right-and-arrow-down-left-from-center',
                    action: (data) => open(data.id)
                },
                {
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
            featured: true,
            list: [
                {
                    id: 'clone',
                    name: 'Clone',
                    icon: 'fa-regular fa-clone'
                },
                {
                    id: 'rename',
                    name: 'Rename',
                    icon: 'fa-regular fa-pen-to-square'
                },
                {
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
            featured: true,
            list: [
                {
                    id: 'open',
                    name: 'Open',
                    icon: 'fa-regular fa-arrow-up-right-and-arrow-down-left-from-center'
                },
                {
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
            featured: true,
            list: [
                {
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

    return (
        <FileBox open={open} { ...props } section={accessible ? list : inaccessible} />
    )
}
