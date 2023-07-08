import React, {createContext, useState} from 'react';

export const UploadContext = createContext('upload');

export default function UploadProvider({children}) {
    const [upload, setUpload] = useState([]);

    return (
        <UploadContext.Provider value={{upload, setUpload}}>
            {children}
        </UploadContext.Provider>
    );
}
