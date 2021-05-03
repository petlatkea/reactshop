// import logo from './logo.svg';¨
import SimpleNav from './SimpleNav.js';
import ProductList from './ProductList.js';
import Basket from './Basket.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <SimpleNav></SimpleNav>
      <ProductList/>
      <Basket/>
    </div>
  );
}

export default App;
