import {Fragment} from "react";
import MainPopup from "../main-popup";

export default function DeleteFileConfirmDialog({ children }) {
    return (
        <MainPopup title="Test" footer={
            <Fragment>
                {children}
            </Fragment>
        }>
            <p>Test</p>
        </MainPopup>
    )
}
