import style from "./icon-icon.module.css";

import {useState} from "react";

export default function IconButton({ icon, text, action }) {
    const [loading, setLoading] = useState(false);

    if (loading) {
        return <p>...</p>
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
