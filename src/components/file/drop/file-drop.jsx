import style from "./file-drop.module.css";

import React, {useRef, useState} from 'react';

const FileDrop = ({action, children}) => {
    const [isDragging, setIsDragging] = useState(false);

    const wrapper = useRef();

    const handleDragEnter = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDragLeave = (event) => {
        if (event.target !== wrapper.current) {
            return;
        }

        setIsDragging(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragging(false);

        console.log(event.dataTransfer)

        action(event.dataTransfer.files[0]);
    };

    return (
        <div ref={wrapper} className={[style.container, isDragging && style.dragged].join(' ')}
             onDragEnter={handleDragEnter}
             onDragOver={handleDragOver}
             onDragLeave={handleDragLeave}
             onDrop={handleDrop}>
            <div className={style.zone}/>
            {children}
        </div>
    );
};

export default FileDrop;