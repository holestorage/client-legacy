import {useNavigate} from "react-router-dom";
import PopupContainer from "../../container/popup-container";
import FileIcon from "../../../ui/list/file/file/icon/file-icon";

export default function FilePopup({ folder, data }) {
    const navigate = useNavigate();

    return (
        <PopupContainer close={() => navigate(`/folder/${folder}`)}>
            <FileIcon data={data} />
        </PopupContainer>
    )
}
