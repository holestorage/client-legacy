import style from "./loadable.module.css";

import {useState} from "react";
import LoadCircle from "../loading/circle/loading-circle";

export default function Loadable({ loadable, action, end, children }) {
    const [loading, setLoading] = useState(false);

    return (
        <div className={style.container}>
            {
                loading ? <LoadCircle /> :
                    <div onClick={loadable ? (event) => {
                        setLoading(true);
                        action(event).then(() => setLoading(false));
                    } : (event) => action(event)}>
                        {children}
                    </div>
            }
        </div>
    )
}
