import React, {createContext, useState} from "react";

export const PopupContext = createContext("popup");

export default function PopupProvider({ children }) {
    const [current, setCurrent] = useState(null);

    return (
        <PopupContext.Provider value={{ current, setCurrent }}>
            {current}
            {children}
        </PopupContext.Provider>
    )
}
