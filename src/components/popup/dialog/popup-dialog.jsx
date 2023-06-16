import MainPopup from "../main/main-popup";

export default function PopupDialog({ title, body, children }) {
    return (
        <MainPopup title={title}>
            <h5>{body}</h5>
            {children}
        </MainPopup>
    )
}
