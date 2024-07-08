import Image from "next/image";
import Navbar from "../modules/Navbar";
import Product from "../modules/Product";
import Display from "../modules/Display";
import Footer from "../modules/Footer";
import User from "../modules/User";

export default function Homepage() {
  return (
    <div>
       <Navbar></Navbar>
    <Display></Display>
    <Footer></Footer>
    </div>
  )
}
