import {useNavigate} from "react-router-dom";
import PopupContainer from "../../container/popup-container";
import FilePreview from "../../../ui/list/file/file/preview/file-preview";

export default function FilePopup({ folder, data }) {
    const navigate = useNavigate();

    return (
        <PopupContainer close={() => navigate(`/folder/${folder}`)}>
            <FilePreview data={data} />
        </PopupContainer>
    )
}
