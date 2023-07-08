import style from "./upload-container.module.css";

import UploadTrack from "../track/upload-track";

export default function UploadContainer() {
    return (
        <div className={style.container}>
            <UploadTrack />
        </div>
    );
}
