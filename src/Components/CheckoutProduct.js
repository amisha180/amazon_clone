import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove item from basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id : id,
        })
    }

  return (
    <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt="img"/>

        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
          {
              Array(rating)
              .fill()
              .map((_,i)=>(
               <p><img className="rating__img" src="https://toppng.com/uploads/preview/star-with-no-background-11549726858frsxd5hmjm.png" alt="img"/></p>
              ))
          }
            </div>
          <button onClick={removeFromBasket}>Remove from Cart</button>

        </div>
      
    </div>
  )
}

export default CheckoutProduct
