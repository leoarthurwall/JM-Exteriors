import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Services from "./components/Services/Services";
import { useState } from "react";
import Menu from "./components/Menu/Menu";

function App() {
  const [isOpen, setIsOpen] = useState(false); //State of menu - open or closed

  //toggles menu between open and closed
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Nav handleMenuClick={handleMenuClick} isOpen={isOpen}  />
      <Menu isOpen={isOpen} handleMenuClick={handleMenuClick}/>
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
