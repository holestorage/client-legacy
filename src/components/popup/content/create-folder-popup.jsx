import InputPopup from "../input/input-popup";
import {HoleApi} from "../../../App";
import {useContext} from "react";
import {PopupContext} from "../../../provider/popup-provider";

export default function CreateFolderPopup({ folder, ...props }) {
    const popupContext = useContext(PopupContext);

    const createFolder = async (name) => {
        await HoleApi.post('folder',{ parent: folder, name: name });
        popupContext.setCurrent(null);
    }

    return (
        <InputPopup title="New folder" placeholder="Folder name" button={{ action: (input) => createFolder(input) }} { ...props } />
    )
}
