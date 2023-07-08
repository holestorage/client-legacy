import style from "./upload-track.module.css";

import UploadContainer from "../container/upload-container";
import {Fragment, useContext} from "react";
import {UploadContext} from "../../../../../provider/upload-provider";

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
                                <p>{JSON.stringify(value.file)}</p>
                            </Fragment>
                        )
                    }
                </div>
            </div>
        </UploadContainer>
    );
}
