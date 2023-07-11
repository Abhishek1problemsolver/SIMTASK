import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    shippingMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  


  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">Name</label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="address">Address</label>
          <input
            className="form-input"
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="phone">Phone Number</label>
          <input
            className="form-input"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="shippingMethod">Shipping Method</label>
          <select
            className="form-select"
            id="shippingMethod"
            name="shippingMethod"
            value={formData.shippingMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select Shipping Method</option>
            <option value="standard">Standard Shipping</option>
            <option value="express">Express Shipping</option>
          </select>
        </div>
        <button type="submit" className="pay-button">Pay</button>
      </form>
      <Link to={'/cart'} className="back-to-cart-link">
        Back to Cart
      </Link>
    </div>
  );
};

export default Checkout;
