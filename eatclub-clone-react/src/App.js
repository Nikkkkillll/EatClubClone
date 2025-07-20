
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Whyeatclub from './components/Whyeatclub';
import About from './components/About';
import Contactus from './components/Contactus';
import Help from './components/Help';
import Delivery from './components/Delivery';
import Privacy from './components/Privacy';
import Disclaimer from './components/Disclaimer';




function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/whyeatclub" element={<Whyeatclub />} /> {/* 👈 add this route */}
          {/* Optional 404 */}
          <Route path="/about" element={<About/>} />
          <Route path="/contactus" element={<Contactus/>} />
          <Route path="/help" element={<Help/>} />
          <Route path="/deliverypolicies" element={<Delivery/>} />
          <Route path="/privacypolicies" element={<Privacy/>} />
          <Route path="/disclaimer" element={<Disclaimer/>} />

          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
        <Footer />
      </Router>

      
    </div>
  );
}

export default App;
