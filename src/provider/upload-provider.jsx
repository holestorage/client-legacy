import React, {createContext, useState} from 'react';
import {HoleApi} from "../App";

export const UploadContext = createContext('upload');

export const uploadFile = async (folder, files, upload, setUpload) => {
    for (const file of files) {
        await HoleApi.post('file',{ folder: folder, file: file }, { headers: { "Content-Type": "multipart/form-data" }, onUploadProgress: (event) => {
                setUpload([...upload, { file: {name: file.name, size: file.size }, event: event}]);
            }}).then(({ data }) => setUpload([...upload, { file: data.file }]));
    }
}

export default function UploadProvider({children}) {
    const [upload, setUpload] = useState([]);

    return (
        <UploadContext.Provider value={{upload, setUpload}}>
            {children}
        </UploadContext.Provider>
    );
}
