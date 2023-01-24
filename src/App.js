import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;