import React, { useState, useEffect } from 'react';
import "../styles/allproducts.css";
import card from "../Components/card"

const AllProduct = () => {
  
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState({
    category: "",
    company: ""
  });
console.log(search);
  const onInput = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://20.244.56.144/test/companies/AMZ/categories//Laptop/products?top=10&minPrice=1&maxPrice=10000", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE5OTg4OTQ4LCJpYXQiOjE3MTk5ODg2NDgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjViZWUxNGJkLWIwN2YtNGIxOC05NjEwLTIzOWJmNmYyMTgwMyIsInN1YiI6InNoYXNoYW5rZ293ZGE4NTQ4QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6ImFmZm9yZG1lZCIsImNsaWVudElEIjoiNWJlZTE0YmQtYjA3Zi00YjE4LTk2MTAtMjM5YmY2ZjIxODAzIiwiY2xpZW50U2VjcmV0IjoiUG1YbXNUdEZPU1JYRmRYSSIsIm93bmVyTmFtZSI6IlNoYXNoYW5rIEdvd2RhIEMiLCJvd25lckVtYWlsIjoic2hhc2hhbmtnb3dkYTg1NDhAZ21haWwuY29tIiwicm9sbE5vIjoiNENCMjFDRzA0OCJ9.z1ic9Ni-D6SiqE6I-S7WDj6G7gf_9TaDsR0khnMHs58" 
        }
      });
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  

  const submitHandler = (e) => {
    e.preventDefault();
    
  };

  useEffect(() => {
    fetchProducts();
    
  }, []);

  return (
    <>
      <div>
        <form className="form" onSubmit={submitHandler}>
          <label>
            Category:
            <select name="category" onChange={e => onInput(e)}>
              <option value="Laptop">Laptop</option>
              <option value="device">Device</option>
              <option value="tools">Tools</option>
              <option value="Phone">Phone</option>
            </select>
          </label>
          <label>
            Company:
            <select name="company" onChange={e => onInput(e)}>
              <option value="AMZ">Amazon</option>
              <option value="FLP">Flipkart</option>
              <option value="SNP">Snapdeal</option>
              <option value="MYN">Myntra</option>
              <option value="AZO">Azo</option>
            </select>
          </label>
          <button type="submit">Search</button>
        </form>
        <div className="product-list">

          {products.map(product => (
            <card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProduct;
