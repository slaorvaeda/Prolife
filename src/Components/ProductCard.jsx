import React, { useState } from 'react';

function ProductCard({ product }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative p-4 border rounded-lg shadow-md"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
            <p className="mt-1 text-gray-600">${product.price}</p>
            {isHovered && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold">
                    {product.category}
                </div>
            )}
        </div>
    );
}

export default ProductCard;
