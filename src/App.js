import './App.css';
import ProductDetails from './components/ProductDetails';
import ProductsList from './components/ProductsList';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTE_PATH } from './contants/Constants';
import NotFound from './components/NotFound';
import CartPage from './components/CartPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE_PATH.PRODUCT_LIST} element={<ProductsList />} />
          <Route path={ROUTE_PATH.SINGLE_PRODUCT} element={<ProductDetails />} />
          <Route path={ROUTE_PATH.CART} element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
