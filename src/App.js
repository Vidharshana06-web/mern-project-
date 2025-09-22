import './App.css';
import Navbar from './component/Navbar.js';
import Home from './pages/Home.js';
import Products from './pages/Products.js';
import ProDetails from './pages/ProDetails.js';
import Cart from './pages/Cart.js';
import Contact from './pages/Contact.js';
import Footer from './component/Footer.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import ForgotPassword from './pages/ForgotPassword.js';
import Profile from './pages/Profile.js';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Navbar />
        <div className="flex-grow-1">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pro' element={<Products />} />
            <Route path='/details' element={<ProDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/log' element={<Login />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
