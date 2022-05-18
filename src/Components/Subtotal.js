import React from 'react';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css';

function Subtotal() {
    const[{basket},dispatch] = useStateValue();

  return (
    <div className="subtotal">
      {/* price */}
      <p>Subtotal ({basket.length} items ):<strong>${getBasketTotal(basket)}</strong>
      </p>
    <small className="subtotal__gift">
        <input type="checkbox"/>This order contains a gift
    </small>
      <button>proceed to checkout</button>
    </div>
  )
}

export default Subtotal
