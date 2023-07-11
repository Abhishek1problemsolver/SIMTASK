import React from "react";
import './products.css';
import { Link } from 'react-router-dom';
const Products = ({ products = [] }) => {
  return (
    <section className="sectiona">
      <div className="container">
      <div className="products">
      {
        products.map((product)=>{
          console.log(product, 'product')
          const { id, title, price, description, category, image}=product;
          return(
            <Link to={`/products/${id}`} className="productsa">
            <a className="anchor">
              <img
                alt={title}
                className="image"
                src={image}
              />
            </a>
            <div className="product">
              <h3 className="text_a">
                {category}
              </h3>
              <h2 className="text_b">
                {title}
              </h2>
              <p className="price">${price}</p>
            </div>
          </Link>

          )
        })
      }
        </div>
      </div>
    </section>
  );
};

export default Products;
