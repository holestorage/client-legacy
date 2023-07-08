import style from "./file-drop.module.css";

import React, { useState } from 'react';

const FileDrop = ({action, children}) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragEnter = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragging(false);

        action(event.dataTransfer.files[0]);
    };

    return (
        <div className={[isDragging && style.dragged].join(' ')}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}>
            {children}
        </div>
    );
};

export default FileDrop;