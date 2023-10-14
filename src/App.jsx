import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/products/:catId" element={<ProductPage />} />
        <Route path="/products/detail/:id" element={ <ProductDetailPage /> } />
        <Route path="/about" element={<AboutPage /> } />
        <Route path="/contact" element={<ContactPage />} /> 
        <Route path="/register" element={<RegisterPage  />} />
        <Route path="/login" element={ <LoginPage /> }  />
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
