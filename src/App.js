import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/login";
import Produk from "./pages/produk";
import Detail from "./pages/produk/Detail";
import Payment from "./pages/produk/Payment";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/produk/detail" element={<Detail />} />
        <Route path="/produk/payment" element={<Payment />} />
        {/* <Route exact path="/categories/:idc" element={<Details />} />
        <Route path="/categories/:idc/products/:idp" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/congratulation" element={<Congratulation />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}
