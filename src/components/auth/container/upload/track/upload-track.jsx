import style from "./upload-track.module.css";

import UploadContainer from "../container/upload-container";
import {Fragment, useContext} from "react";
import {UploadContext} from "../../../../../provider/upload-provider";
import convertSize from "convert-size";
import IconButton from "../../../../ui/button/icon/icon-button";
import FileIcon from "../../../../ui/list/file/file/preview/icon/file-icon";

export default function UploadTrack() {
    const {upload, setUpload} = useContext(UploadContext);

    if (upload.length > 0) {
        return (
            <UploadContainer>
                <div className={style.container}>
                    <p>Upload</p>
                    <hr />
                    <div>
                        {
                            upload.map((value, key) =>
                                <Fragment key={key}>
                                    <div className={style.content}>
                                        <div>
                                            <FileIcon data={value.file} />
                                            <h5>{value.file.name}</h5>
                                            <p>{convertSize(value.file.size, { accuracy: -1 })}</p>
                                        </div>
                                        <IconButton action={() => setUpload(upload.slice(key + 1))} icon="fa-regular fa-xmark" />
                                    </div>
                                </Fragment>
                            )
                        }
                    </div>
                </div>
            </UploadContainer>
        );
    }

    return null;
}
