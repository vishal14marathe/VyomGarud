// src/App.jsx
import { useState, useEffect } from "react";

import Header from "./Components/Header";
import "./index.css";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Capabilities from "./Components/Capabilities";
import Highlights from "./Components/Highlights";
import Contact from "./Components/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 bg-orange-500 rounded-full mb-4"></div>
          <div className="text-orange-500 text-xl font-semibold">VyomGarud</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <About />
      <Capabilities />
      <Highlights />
      <Contact />
    </div>
  );
}

export default App;
