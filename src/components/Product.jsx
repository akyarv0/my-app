import React, { useState } from 'react';
import '../css/Product.css';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { title, price, description, category, image } = product;
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    const toggleMore = () => {
        setIsExpanded(!isExpanded);
    };

    const shouldShowToggle = title.length > 30;

    return (
        <div className="card">
            <img className="image" src={image} alt={title} />
            <div className="card-content">
                <h3 className="title">
                    {isExpanded ? title : `${title.slice(0, 30)}...`}
                    {shouldShowToggle && (
                        <button className="toggle-button" onClick={toggleMore}>
                            {isExpanded ? 'less' : 'more'}
                        </button>
                    )}
                </h3>
                <p className="price">${price}</p>
                <p className="category">{category}</p>
            </div>
            <button className="details-button" onClick={() => navigate(`/product-details/${product.id}`)}>Details</button>
        </div>
    );
};

export default Product;
