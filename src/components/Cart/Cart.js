import React from "react";

const Cart = (props) => {

    const {cart}=props;

    let total=0;
    for (const product of cart){
        total=total+product.price
    }
  return (
    <>
      <div className="cart-section">
        <h3>Order Summary</h3>
        <h6>Items Ordered:{props.cart.length}</h6>
        <p>Total :{total}</p>
      </div>
    </>
  );
};

export default Cart;
