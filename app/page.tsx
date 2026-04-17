import Image from "next/image";
import Link from "next/link";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Trainers from "./components/Trainers";
import Programs from "./components/Programs";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Trainers />
      <Programs />
      <Pricing/>
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}