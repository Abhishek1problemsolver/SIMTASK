import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Features.css';

const Features = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-category">CATEGORIES</h2>
          <h1 className="features-title">Explore Our Product Categories</h1>
        </div>
        <div className="features-grid">
          {categories.map((category) => (
            <div className="features-card" key={category}>
              <Link to={`/categories/${category}`} className="card-link">
                <div className="card-inner">
                  <div className="card-icon">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="card-icon-svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="card-title">{category}</h2>
                  <div className="card-description">
                    <p className="card-text">
                      Explore our wide range of {category} products. We offer a diverse collection of items
                      including clothing, electronics, accessories, home decor, and more. Find the perfect
                      products to meet your needs and preferences.
                    </p>
                    <span className="card-link-text">Shop Now</span>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="card-link-icon"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
