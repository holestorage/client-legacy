import style from './main-fallback.module.css';

import MainButton from '../../../components/ui/button/main/main-button';
import {useErrorBoundary} from 'react-error-boundary';

export default function MainFallback({title, body, retry}) {
  const {resetBoundary} = useErrorBoundary();

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div>
          <h1>{title}</h1>
          <h3>{body}</h3>
        </div>
        {retry && <MainButton action={resetBoundary} icon="fa-regular fa-arrow-rotate-right" text="Retry"/>}
      </div>
    </div>
  );
}
