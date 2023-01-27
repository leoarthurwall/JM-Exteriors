import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Services from "./components/Services/Services";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <Nav handleMenuClick={handleMenuClick} isOpen={isOpen} />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
