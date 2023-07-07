import React, {createContext, useState} from 'react';

export const ToastContext = createContext('toast');

export const ToastType = {
    CREATED: {code: 201, title: 'Done', type: 'created'},
    ERROR: {code: 500, title: 'Something went wrong', type: 'error'},
    NOT_FOUND: {code: 404, title: 'That could not be found', type: 'error'},
};

export const showToast = (context, error) => {
    const toastType = Object.values(ToastType).find((type) => type.code === error.response.status) ?? ToastType.ERROR;

    context.addToast(toastType.title, toastType.type);
};

export default function ToastProvider({children}) {
    const [toastList, setToastList] = useState([]);

    function addToast(title, type) {
        const toast = {
            id: Date.now(),
            title: title,
            type: type,
        };

        setToastList([toast]);

        setTimeout(() => {
            removeToast(toast);
        }, 3000);
    }

    function removeToast(toast) {
        setToastList(toastList.filter((target) => target !== toast));
    }

    function clear() {
        setToastList([]);
    }

    return (
        <ToastContext.Provider value={{toastList, addToast, removeToast}}>
            {children}
        </ToastContext.Provider>
    );
}
