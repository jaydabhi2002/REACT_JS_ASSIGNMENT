import "./App.css";
import Head from "./Head";
import Footer from "./Footer";
import Main from "./Main";
import Card from "./Card";
import Contact from "./Contact";
import Blog from "./Blog";
import About from "./About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Head />
      <Main />

      <Routes>
        <Route path="/" element={<Card />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
