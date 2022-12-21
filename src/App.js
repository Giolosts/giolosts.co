import Navbar from './Layouts/Menu';
import Footer from './Layouts/Footer';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import Engineer from './Pages/EngineerPage';
import Company from './Pages/CompanyPage';


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/giolosts.co/engineer" element={<Engineer />} />
        <Route path="/giolosts.co/aboutus" element={<AboutUs />} />
        <Route path="/giolosts.co/companies" element={<Company />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
