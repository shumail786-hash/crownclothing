import React from "react";
import CategoriesPreview from "../categoriesPreview/categoriesPreview";
import { Route, Routes } from "react-router-dom";
import Category from "../category/category";
import "./shop.styles.scss";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
