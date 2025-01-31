import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const Products = () => {
  return (
    <>
      <h1>products</h1>
      <ul>
        {PRODUCTS.map((row) => (
          <li key={row.id}>
            <Link to={`/products/${row.id}`}>{row.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
