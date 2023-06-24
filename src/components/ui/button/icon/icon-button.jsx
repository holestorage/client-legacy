import style from "./icon-icon.module.css";

import {useState} from "react";
import LoadCircle from "../../../skeleton/loading/circle/loading-circle";

export default function IconButton({ icon, text, action }) {
    const [loading, setLoading] = useState(false);

    if (loading) {
        return <LoadCircle />
    }

    return (
        <button onClick={() => {
            setLoading(true);
            action().then(() => setLoading(false));
        }} className={style.button}>
            <i className={icon} />
            <p>{text}</p>
        </button>
    )
}
