import React, { useEffect, useState } from 'react'
import './Home.css'
import Hero from '../components/Hero';
import Products from '../components/products';
import Features from '../components/Features';
const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [])
  return (
    <>
    <Hero />
    <div className='text'>Products</div>
    {
        products.length > 0 ? 
        <Products products={products} /> 
        :
        <div>Loading.....</div>
    }
    <Products/>
    <Features/>
    </>
  )
}

export default Home