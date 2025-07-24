
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Impact from "./components/Impact";
import Help from "./components/Help";
import Donate from "./components/Donate";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Hero />
      <About />
      <Impact />
      <Help />
      <Donate />
      <Footer />
    </div>
  );
};

export default App;
