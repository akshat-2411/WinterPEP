import logo from './logo.svg';
import './App.css';
import Maintain from './Components/Maintain';
import Employee from './Components/Employee';
import Counter from './Components/Counter';
import ShoppingCart from './Components/Shopping';

function App() {
  return (
    <div className="App">
      <Maintain />
      <Employee />
      <Counter />
      <ShoppingCart />
    </div>
  );
}

export default App;
