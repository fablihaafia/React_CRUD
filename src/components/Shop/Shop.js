import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  console.log("products", products);
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart =(product)=>{
const newCart = [...cart,product]
setCart(newCart)

  }

  return (
    <div className="shop-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div className="product-section">
              <h3>Products:</h3>
              {products.map((product, index) => (
               
                <Product key ={product.key} product={product} handleAddToCart={handleAddToCart}></Product>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
           <Cart cart={cart}>

           </Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
