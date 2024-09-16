import React from "react";
import Navbar from "../components/Navbar";

const Error = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>An error occured!</h1>
        <p>Couldn't find this page.</p>
      </main>
    </>
  );
};

export default Error;
