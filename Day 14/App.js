import logo from './logo.svg';
import './App.css';
import FetchResources from './components/FetchResources';
import FetchWithAxios from './components/FetchWithAxios';
import FetchWithParams from './components/FetchWithParams';

function App() {
  return (
    <div className="App">
      {/* <FetchResources /> */}
      {/* <FetchWithAxios /> */}
      <FetchWithParams />
    </div>
  );
}

export default App;
