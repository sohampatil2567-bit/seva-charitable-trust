import { hydrateRoot } from 'react-dom/client';
import { App } from './App';
import './styles.css';

const root = document.getElementById('root');
if (!root) throw new Error('The website root element was not found.');

hydrateRoot(root, <App pathname={window.location.pathname} />);
