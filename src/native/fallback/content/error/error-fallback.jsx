import MainFallback from '../../main/main-fallback';

export default function ErrorFallback(props) {
  return (
    <MainFallback body="Something went wrong. Try again." {...props}/>
  );
}

