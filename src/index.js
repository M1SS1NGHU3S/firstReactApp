import ReactDOM from 'react-dom/client';
import "./css/style.css";
import App from './App';

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

root.render(<App />);