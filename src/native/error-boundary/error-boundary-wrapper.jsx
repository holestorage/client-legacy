import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from '../fallback/content/error/error-fallback';

export default function ErrorBoundaryWrapper({children}) {
  return (
    <ErrorBoundary fallback={<ErrorFallback retry/>}>
      {children}
    </ErrorBoundary>
  );
}
