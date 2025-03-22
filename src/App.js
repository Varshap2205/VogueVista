import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        {/* Sticky navbar for better mobile experience */}
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        {/* Main content area with responsive padding */}
        <main className="flex-grow px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-20 w-full">
          <div className="py-4 sm:py-6 lg:py-8">
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route
                path="/mens"
                element={
                  <div className="max-w-full overflow-hidden">
                    <ShopCategory banner={men_banner} category="men" />
                  </div>
                }
              />
              <Route
                path="/womens"
                element={
                  <div className="max-w-full overflow-hidden">
                    <ShopCategory banner={women_banner} category="women" />
                  </div>
                }
              />
              <Route
                path="/kids"
                element={
                  <div className="max-w-full overflow-hidden">
                    <ShopCategory banner={kid_banner} category="kid" />
                  </div>
                }
              />
              <Route path="/product" element={<Product />}>
                <Route path=":productId" element={<Product />} />
              </Route>
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/login"
                element={
                  <div className="max-w-md mx-auto">
                    <LoginSignUp />
                  </div>
                }
              />
            </Routes>
          </div>
        </main>

        {/* Footer with responsive spacing */}
        <div className="mt-auto">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

// rzp_test_WkrGsSgBglkqKl      key id
// s7WduWvHgYDN961saUwgoOKW     key secret