import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import cssclasses from "./Root.module.css";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className={cssclasses.content}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
