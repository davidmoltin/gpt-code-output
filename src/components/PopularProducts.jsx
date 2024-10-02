import React from 'react';

const PopularProducts = () => {
    const products = [
        { name: 'Yellow long sleeved dress', price: '$225.00', brand: 'Polo club' },
        { name: 'Black & white striped shirt', price: '$225.00', brand: 'Brand name' },
        { name: 'Yellow skater dress', price: '$225.00', brand: 'Brand name' },
        { name: 'Blue denim shorts', price: '$225.00', brand: 'Polo club' },
    ];

    return (
        <section className="py-20 px-10">
            <h2 className="text-3xl font-bold mb-10">Popular Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, index) => (
                    <div key={index} className="relative border p-5 rounded-lg">
                        <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded">On Sale</span>
                        <div className="bg-gray-300 h-64 mb-5"></div>
                        <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                        <p className="text-gray-600">{product.brand}</p>
                        <p className="text-xl font-semibold">{product.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularProducts;
