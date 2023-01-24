import "./App.css";
import About from "./components/About/About";
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
    </div>
  );
}

export default App;
