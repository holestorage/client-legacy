import style from "./upload-container.module.css";

export default function UploadContainer({children}) {
    return (
        <div className={style.container}>
            {children}
        </div>
    );
}
