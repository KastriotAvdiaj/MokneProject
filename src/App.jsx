import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import { Header } from "./Components/Header/Header";
import { AboutUs } from "./Pages/About Us/AboutUs";
import { Contact } from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer"; // Import the Footer component

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="header-wrap">
          <Header />
        </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
