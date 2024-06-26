// In Category.jsx
import React from 'react';
import { useDispatch } from "react-redux";
import { getProductsByCategory } from "../features/categorySlicer";
import { useSelector } from "react-redux";

const Category = () => {
    const dispatch = useDispatch();
    const { categories } = useSelector((store) => store.categories);

    const handleCategoryClick = (category) => {
        dispatch(getProductsByCategory(category));
    };

    return (
        <div>
            {categories.map((category) => (
                <div key={category} onClick={() => handleCategoryClick(category)}>
                    {category}
                </div>
            ))}
        </div>
    );
}

export default Category;