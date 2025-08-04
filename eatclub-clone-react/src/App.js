
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
import ScrollToTop from './components/ScrollToTop'
import Cart from './components/Cart'
import Offer from './components/Offer';
import BulkOrder from './components/BulkOrder';
import ValueFun99 from './components/ValueFun99';
import Store9 from './components/Store9';
import WhatNew from './components/WhatNew';
import ProteinMeals from './components/ProteinMeals';
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />  
        <ScrollToTop/>
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
          <Route path="/cart/:id" element={<Cart />} />
          <Route path='/offer' element ={<Offer/>}/>
          <Route path='/bulkorder' element ={<BulkOrder/>}/>
          <Route path='/value99' element ={<ValueFun99/>}/>
          <Route path='/store99' element ={<Store9/>}/>
          <Route path='/whatnew' element ={<WhatNew/>}/>
          <Route path='/ProteinMeals' element ={<ProteinMeals/>}/>
          <Route path='/signin' element ={<Login/>}/>
          <Route path='/signup' element ={<SignUp/>}/>


          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
        <Footer />
      </Router>

      
    </div>
  );
}

export default App;
