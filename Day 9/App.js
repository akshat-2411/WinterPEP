import logo from './logo.svg';
import './App.css';
import { BasicEvents } from './components/BasicEvents';
import Form from './components/Form';
import KnowYourself from './components/KnowYourself';


function App() {
  return (
    <div className="App">
      <KnowYourself />
      {/* <BasicEvents />
      <Form /> */}
    </div>
  );
}

export default App;
