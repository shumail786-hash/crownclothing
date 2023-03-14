import React, { useEffect, useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/productCard/productCard";
import "./category.scss";
const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title-name">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};
export default Category;
