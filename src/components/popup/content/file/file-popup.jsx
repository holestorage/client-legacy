import {useNavigate} from "react-router-dom";
import PopupContainer from "../../container/popup-container";
import FilePreview from "../../../ui/list/file/file/preview/file-preview";
import ToolList from "../../../ui/list/tool/tool-list";

export default function FilePopup({ folder, data }) {
    const navigate = useNavigate();

    return (
        <PopupContainer close={() => navigate(`/folder/${folder}`)}>
            <ToolList accessible data={data} filter={item => item.featured} />
            <FilePreview data={data} />
        </PopupContainer>
    )
}
