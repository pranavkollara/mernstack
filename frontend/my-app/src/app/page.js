"use client"; // Add this directive at the top

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductInfo from "./pages/ProductInfo";

export default function MyApp() { 
 
  
 


  return (
    <Homepage></Homepage>
  );
}
