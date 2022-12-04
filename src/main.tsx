import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorFallback from './components/ErrorFallback';
import './index.css';

const $root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot($root).render(
  <ErrorBoundary renderFallback={(error) => <ErrorFallback error={error} />}>
    <App />
  </ErrorBoundary>,
);
