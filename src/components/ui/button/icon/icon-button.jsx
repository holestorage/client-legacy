import style from "./icon-icon.module.css";

import {useState} from "react";
import LoadCircle from "../../../skeleton/loading/circle/loading-circle";

export default function IconButton({ icon, text, loadable, action }) {
    const [loading, setLoading] = useState(false);

    return (
        <div className={style.container}>
            {
                loading ? <LoadCircle /> :
                <button onClick={loadable ? () => {
                    setLoading(true);
                    action().then(() => setLoading(false));
                } : () => action()} className={style.button}>
                    <i className={icon} />
                    <p>{text}</p>
                </button>
            }
        </div>
    )
}
