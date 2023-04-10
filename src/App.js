import { Route, Routes } from "react-router-dom";
import "./App.scss"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import MenuOne from "./components/MenuOne/MenuOne";
import MenuTwo from "./components/MenuTwo/MenuTwo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/one" element={<MenuOne />} />
        <Route path="/two" element={<MenuTwo />} />
      </Routes>
    </div>
  );
}

export default App;
