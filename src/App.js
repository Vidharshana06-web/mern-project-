import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProDetails from './pages/ProDetails';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Footer from './component/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';

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
