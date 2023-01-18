import './App.css';
import ProductDetails from './components/ProductDetails';
import ProductsList from './components/ProductsList';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTE_PATH } from './contants/Constants';
import NotFound from './components/NotFound';
import CartPage from './components/CartPage';
import ParentLayout from './layouts/ParentLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE_PATH.PRODUCT_LIST} element={<ParentLayout Component={ProductsList} />} />
          <Route path={`${ROUTE_PATH.SINGLE_PRODUCT}:id`} element={<ParentLayout Component={ProductDetails} />} />
          <Route path={ROUTE_PATH.CART} element={<ParentLayout Component={CartPage} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
