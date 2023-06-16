import MainPopup from "../main/main-popup";

export default function PopupDialog({ title, body, children }) {
    return (
        <MainPopup title={title} footer={
            <div>
                <h1>a</h1>
            </div>
        }>
            {children}
        </MainPopup>
    )
}
