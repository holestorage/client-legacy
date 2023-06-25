import MainPopup from "../../main/main-popup";
import {useNavigate} from "react-router-dom";

export default function FilePopup({ folder, id }) {
    const navigate = useNavigate();

    return (
        <MainPopup close={() => navigate(`/folder/${folder}`)}>
            <p>content</p>
        </MainPopup>
    )
}
