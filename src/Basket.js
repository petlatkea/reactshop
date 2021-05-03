import CheckoutForm from './CheckoutForm.js';
import MyBasket from './MyBasket.js';

function Basket() {
  return (
    <div className="Basket">
      <MyBasket></MyBasket>
      <CheckoutForm></CheckoutForm>
    </div>
  )
}

export default Basket;