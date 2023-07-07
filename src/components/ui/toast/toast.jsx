import style from './toast.module.css';

import React, {useContext} from 'react';
import IconButton from '../button/icon/icon-button';
import {ToastContext} from '../../../provider/toast-provider';

export default function Toast({toast}) {
  const {removeToast} = useContext(ToastContext);

  return (
    <div className={[style.container, style[toast.type]].join(' ')}>
      <div>
        <p>{toast.title}</p>
      </div>
      <IconButton action={() => removeToast(toast)} icon="fa-regular fa-xmark"/>
    </div>
  );
}

