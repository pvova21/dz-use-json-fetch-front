import FetchData from './components/FetchData';
import './App.css';

export default function App() {
const url = 'http://localhost:7070'
  return (
    <div className="app">
      <FetchData url={url} opts='data' />
      <FetchData url={url} opts='loading' />
      <FetchData url={url} opts='error' />
    </div>
  );
}
