"use client";
import React, { useEffect, useState } from 'react';
import Product from './Product'


export default function Display() {

  const [jersey, setJersey] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchJersey = async () => {
      try {
        const response = await fetch('http://localhost:4000/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setJersey(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJersey();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='flex flex-row p-8 w-full justify-around  flex-wrap '>
      {jersey.map(jerseys => (
          <Product name={jerseys.name} des = {jerseys.des} price = {jerseys.price} discount={jerseys.discount}></Product>
        ))}
      {/* <Product name="Brazil"></Product>
      <Product name="Netherlands"></Product>
      <Product name="France"></Product>
      <Product name="Netherlands"></Product>
      <Product name="France"></Product> */}
    
    </div>
  )
}
