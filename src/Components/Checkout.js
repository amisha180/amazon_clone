import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {

    const [{basket}]  = useStateValue();

  return (

    <div className="checkout">
      <div className="checkout__left">
      <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/SS22/reverseingress/3.jpg" alt="ad" />
      {basket?.length===0 ? (
          <div>
              <h2>Your shopping cart is empty</h2>
              <p>you have no items in your basket. To buy one or more click "Add To Cart" next to the item</p>
          </div>
      ) : (
          <div>
              <h2 className="checkout__title">Your shopping cart</h2>
              {/* List out all of the checkout products */}
              {basket.map(item =>(
                  <CheckoutProduct
                    id = {item.id}
                    title = {item.title}
                    image  = {item.image}
                    price = {item.price}
                    rating = {item.rating}

                  
                  />
              ))}
              
          </div>
      )}
      </div>
      {basket.length >0 && (
        <div className="checkout__right">
          <Subtotal/>
        </div>

      )}
    </div>
  )
}

export default Checkout
