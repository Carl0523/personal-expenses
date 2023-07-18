
//Import the default react-dom functionality for rendering react components
import ReactDOM from 'react-dom/client';

//Import the css stylesheet
import './index.css';

//Import default export from App.js file
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
