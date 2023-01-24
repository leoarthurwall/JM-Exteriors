import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
    </div>
  );
}

export default App;
