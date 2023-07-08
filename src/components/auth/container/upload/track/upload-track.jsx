import style from "./upload-track.module.css";

import UploadContainer from "../container/upload-container";
import {Fragment, useContext} from "react";
import {UploadContext} from "../../../../../provider/upload-provider";
import convertSize from "convert-size";

export default function UploadTrack() {
    const {upload} = useContext(UploadContext);

    return (
        <UploadContainer>
            <div className={style.container}>
                <p>Upload</p>
                <hr />
                <div>
                    {
                        upload.map((value, key) =>
                            <Fragment key={key}>
                                <p>{value.file.name}</p>
                                <p>{convertSize(value.file.size, { accuracy: -1 })}</p>
                            </Fragment>
                        )
                    }
                </div>
            </div>
        </UploadContainer>
    );
}
