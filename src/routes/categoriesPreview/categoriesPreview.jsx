import React, { Fragment, useContext } from "react";
import { CategoriesContext } from "../../context/categories.contexts";
import CategoryPreview from "../../components/categoryPreview/categoryPreview";
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} products={products} title={title} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
