import style from './loading-wrapper.module.css';

export default function LoadingWrapper({element}) {
  return (
    <div className={style.container} >
      {element}
    </div>
  );
}
