import React from "react";

const Product = (props) => {
  console.log("productimg", props);
  const { name, img, price, seller, stock } = props.product;
  return (
    <>
      <div className="border-0 card mt-5 align">
        <div className="container">

        <div className="">
        <div className="row">
          <div className="col-6">
            <div className="product-img  ">
              <img src={img} alt="" className="img-fluid"/>
            </div>
          </div>
          <div className="col-6">
            <div className="product-details">
              <h4>{name}</h4>
              <h5>${price}</h5>
              <h6>only {stock} left in stock-oder soon </h6>
              <button onClick ={()=> props.handleAddToCart(props.product)} className="btn btn-warning">Add to card</button>
            </div>
          </div>
        </div>
        </div>
        {/* <hr></hr> */}
        </div>
      </div>
    </>
  );
};

export default Product;
