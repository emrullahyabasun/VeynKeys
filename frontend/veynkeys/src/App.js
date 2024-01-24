
import './App.css';
import { BrowserRouter as Router, Routes, Route,Navigate  } from 'react-router-dom';
import Carousel from './Components/Carousel';
import CategorybuttonedProducts from './Components/CategorybuttonedProducts';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUs from './Pages/ContactUs';
import ShopPage from './Pages/ShopPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import LoginPage from './Pages/LoginPage';
import CartPage from './Pages/CartPage';


function App() {
  return (
    <>
     <Router>
        <Navbar />
        <Carousel />
        <Routes>
          <Route path="/" element={<LoginPage />} />  // Ana sayfada LoginPage görüntüleniyor
          <Route path="/home" element={<HomePage />} />  // HomePage artık '/home' adresinde
          <Route path="/AboutUsPage" element={<AboutUsPage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/ShopPage" element={<ShopPage />} />
          <Route path="/ProductDetailPage/:productId" element={<ProductDetailPage />} />
          <Route path="/CartPage" element={<CartPage />} />
          {/* Giriş başarılıysa, '/home' adresine yönlendir */}
          <Route path="/login" element={<Navigate replace to="/home" />} />
        </Routes>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
