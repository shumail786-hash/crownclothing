import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Home from "./routes/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import CheckOutProduct from "./routes/checkOutProduct/checkOutProduct";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOutProduct />} />
      </Route>
    </Routes>
  );
};

export default App;
