import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };
  return (
    <div>
      Home
      <p>
        <Link to="/products">Go to products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Go to products</button>
      </p>
    </div>
  );
};

export default Home;
