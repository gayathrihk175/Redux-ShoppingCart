import './App.css';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<ProductCard/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
