import {Fragment, useContext, useEffect, useState} from "react";
import HeaderMain from "../../../../header/main/header-main";
import MainButton from "../../../../button/main/main-button";
import PathDisplay from "../../../path/display/path-display";
import FileList from "../../../file/file-list";
import FolderList from "../../folder-list";
import {HoleApi} from "../../../../../../App";
import {useLocation, useParams} from "react-router-dom";
import Container from "../../../../container/container";
import {PopupContext} from "../../../../../../provider/popup-provider";
import FilePopup from "../../../../../popup/content/file/file-popup";
import InputPopup from "../../../../../popup/input/input-popup";
import FileDrop from "../../../../../file/drop/file-drop";
import {UploadContext} from "../../../../../../provider/upload-provider";

export default function SectionContent({ title, path, fallback, ...props }) {
    const {upload, setUpload} = useContext(UploadContext);

    const popupContext = useContext(PopupContext);

    const [data, setData] = useState(null);

    const location = useLocation();
    const { folder, file } = useParams();

    const fetchContent = () => {
        HoleApi.get(path).then(response => setData(response.data));
    };

    const updatePopup = async () => {
        if (file) {
            const response = await HoleApi.get(`file/${file}`).then(response => response.data);

            popupContext.setCurrent(<FilePopup folder={folder} data={response['file']} />);
        }
    };

    const createFolder = async (name) => {
        await HoleApi.post('folder',{ parent: folder, name: name });
        popupContext.setCurrent(null);
    }

    const uploadFile = async (file) => {
        await HoleApi.post('file',{ folder: folder, file: file }, { headers: { "Content-Type": "multipart/form-data" }, onUploadProgress: (event) => {
            handleFileUpload(file);
            setUpload([...upload, {file: file, event: event}]);
        }});
    }

    const handleFileUpload = (file) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            const fileData = e.target.result;

            console.log(fileData); // You can do further processing with the JSON data here
        };

        reader.readAsText(file);
    };

    useEffect(() => {
        fetchContent();
        updatePopup();

        if (!file) {
            popupContext.setCurrent(null);
        }
    }, [location, folder, file]);

    if (data) {
        const files = data.content.files;
        const folders = data.content.folders;

        return (
            <Container>
                <HeaderMain left={
                    <Fragment>
                        <MainButton icon="fa-regular fa-angle-up" text="Upload file" />
                        <MainButton icon="fa-regular fa-folder" text="Create folder" action={() => {
                            popupContext.setCurrent(<InputPopup title="Create folder" placeholder="Folder name" button={{ action: (input) => createFolder(input) }} />);
                        }} />
                    </Fragment>
                }>
                    {title ? <h3>{title}</h3> : <PathDisplay data={data.content} />}
                </HeaderMain>
                <FileDrop action={uploadFile}>
                    {folders.length > 0 && <FolderList { ...props } list={folders} />}
                    {files.length > 0 ? <FileList { ...props } list={files} /> : fallback}
                </FileDrop>
            </Container>
        )
    }
}
