import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shopp from './Pages/Shopp'
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shopp/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}></Route>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}></Route>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}></Route>
        {/* <Route path='/products' element={<Product/>}></Route>
        <Route path=':productId'element={<Product/>}></Route> */}
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignUp/>}></Route>
      </Routes>
   
      <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
