import style from './toast-display.module.css';

import React, {useContext} from 'react';
import {ToastContext} from '../../../../provider/toast-provider';
import Toast from '../toast';

export default function ToastDisplay() {
  const toastProvider = useContext(ToastContext);

  return (
    <div className={style.container}>
      {
        toastProvider.toastList.map((toast, index) => (
          <div key={index}>
            <Toast toast={toast} />
          </div>
        ))
      }
    </div>
  );
}
