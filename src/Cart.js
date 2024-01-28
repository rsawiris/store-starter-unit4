import React from 'react';

const Cart = ({ updateOrder, removeFromCart, lineItems, cart, products, decrementQuantity })=> {

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {
          lineItems.filter((lineItem) => {return lineItem.order_id === cart.id}).map( lineItem => {
            const product = products.find(product => product.id === lineItem.product_id) || {};
            return (
              <div>
              <li key={ lineItem.id }>
              <div>
                { product.name } Price: ${ product.price * lineItem.quantity }.00
                 ({ lineItem.quantity })
                <button onClick={ ()=> removeFromCart(lineItem)}>Remove From Cart</button>

                 <button onClick={() => {incrementQuantity(lineItem)}}>+</button>

                <button onClick={() => 
                
                  {if(lineItem.quantity > 1) {
                    decrementQuantity(lineItem)
                  }else {
                  removeFromCart(lineItem)
                }}}>-</button>
               

                </div>

                

                <button onClick={ ()=> removeFromCart(lineItem)}>Remove From Cart</button>

              </li>
              </div> 
            );
          })
        }
      </ul>
      {
        lineItems.filter((lineItem) => {return lineItem.order_id === cart.id }).length ? <button onClick={()=> {
          updateOrder({...cart, is_cart: false });
        }}>Create Order</button>: null
      }
    </div>
  );
};

export default Cart;
