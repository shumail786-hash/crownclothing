import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../categoriesPreview/categoriesPreview";
import { Route, Routes } from "react-router-dom";
import Category from "../category/category";
import "./shop.styles.scss";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      dispatch(setCategories(categoriesArray));
      // console.log(categoriesArray);
    };
    getCategoriesMap();
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
