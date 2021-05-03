// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <SimpleNav></SimpleNav>
      <ProductList>
        
      </ProductList>  
      <Basket>
      </Basket>
    </div>
  );
}

function SimpleNav(){
  return (
    <nav className="SimpleNav">
      <h1>Simple navigation</h1>
    </nav>
  );
}

function ProductList() {
  return (
    <div className="ProductList">
        <Product></Product>  
        <Product></Product>  
        <Product></Product>  
        <Product></Product>  
        <Product></Product>  
        <Product></Product>  
    </div>
  )
}

function Product() {
  return (
    <p>product details</p>
  )
}

function Basket() {
  return (
    <div className="Basket">
      <MyBasket></MyBasket>
      <CheckoutForm></CheckoutForm>
    </div>
  )
}

function MyBasket() {
  return(
    <p>Displays #items and price</p>
  )
}

function CheckoutForm() {
  return (
    <p>Some checkout form</p>
  )
}

export default App;
