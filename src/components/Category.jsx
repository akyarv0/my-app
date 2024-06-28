import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProducts, getProductsByCategory, setSelectedCategory } from "../features/categorySlicer";
import "../css/Category.css"; // Import the CSS file

const Category = () => {
  const dispatch = useDispatch();
  const { categories, loadingCategories, loadingProducts, selectedCategory } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    if (category === "All") {
      dispatch(setSelectedCategory(null));
      dispatch(getProducts());
    } else {
      dispatch(setSelectedCategory(category));
      dispatch(getProductsByCategory(category));
    }
  };

  return (
    <div>
      <div className="category" style={{ display: "flex", justifyContent: "center" , gap: "10px" }}>
        {loadingCategories ? (
          <p>Loading categories...</p>
        ) : (
          <div style={{display: "flex", gap: "10px",marginTop:"20px" }}>
            <button
              className={!selectedCategory ? "active" : ""}
              onClick={() => handleCategoryClick("All")}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
