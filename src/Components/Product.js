import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';


function Product({id,title,price,rating,image}) {

  const [{},dispatch] = useStateValue();
  const addToBasket = ()=> {
    dispatch({
      type: 'ADD_TO_BASKET',
      item : {
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating
      }
    })
  };

  return (
    <div className="product">
        <div className="product__info">
        <b>{title}</b>
      <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
      </p>
      <div className="product__rating">
          {
              Array(rating)
              .fill()
              .map((_)=>(
               <p><img className="rating__img" src="https://toppng.com/uploads/preview/star-with-no-background-11549726858frsxd5hmjm.png" alt="img"/></p>
              ))
          }
      </div>
        </div>
      
      <img className="product__image" src={image} alt="ipod" />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  )
}

export default Product
