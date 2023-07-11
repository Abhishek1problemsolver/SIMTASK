import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css';
import { loadStripe } from '@stripe/stripe-js';

const Cart = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const carts = JSON.parse(localStorage.getItem('cart')) || [];

  useEffect(() => {
    const calculateTotal = () => {
      const totalPrice = carts.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotal(totalPrice);
    };

    calculateTotal();
  }, [carts]);

  const handleIncrement = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    navigate('/cart');
  };

  const handleDecrement = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    navigate('/cart');
  };

  const removeProduct = (id) => {
    const updatedCart = carts.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    navigate('/cart');
  };

  const handleCheckout = async () => {
    navigate('/Checkout');
  }

  if (carts.length === 0) {
    return <div className="cart-empty">Your cart is empty</div>;
  }


  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1 className="cart-title">Shopping Cart</h1>
        <h2 className="cart-items">{carts.length} Items</h2>
      </div>
      <div className="cart-items-list">
        <div className="cart-item-header">
          <div className="item-details">Product Details</div>
          <div className="item-quantity">Quantity</div>
          <div className="item-price">Price</div>
          <div className="item-total">Total</div>
        </div>
        {carts.map((cart) => (
          <div className="cart-item" key={cart.id}>
            <div className="item-details">
              <div className="item-image">
                <img src={cart.image} alt={cart.title} />
              </div>
              <div className="item-info">
                <h3 className="item-title">{cart.title}</h3>
                <p className="item-category">{cart.category}</p>
                <button className="remove-button" onClick={() => removeProduct(cart.id)}>
                  Remove
                </button>
              </div>
            </div>
            <div className="item-quantity">
              <button className="quantity-button" onClick={() => handleDecrement(cart.id)}>
                -
              </button>
              <span className="quantity">{cart.quantity}</span>
              <button className="quantity-button" onClick={() => handleIncrement(cart.id)}>
                +
              </button>
            </div>
            <div className="item-price">${cart.price}</div>
            <div className="item-total">${(cart.price * cart.quantity).toFixed(2)}</div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2 className="summary-title">Order Summary</h2>
        <div className="summary-row">
          <span className="summary-label">Items {carts.length}</span>
          <span className="summary-value">${total.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <label className="shipping-label">Shipping</label>
          <select className="shipping-select">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div className="summary-row">
          <div className="summary-total-label">Total cost</div>
          <div className="summary-total-value">${(total + 10).toFixed(2)}</div>
        </div>
        <button className="checkout-button" onClick={handleCheckout} >Checkout</button>
      </div>
      <Link to={'/'} className="continue-shopping-link">
        <svg className="arrow-icon" viewBox="0 0 448 512">
          <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
        </svg>
        Continue Shopping
      </Link>
    </div>
  );
};

export default Cart;
