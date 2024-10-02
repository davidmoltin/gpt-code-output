import React from 'react';

const Hero = () => {
    return (
        <section className="bg-gray-100 py-20 text-center">
            <h1 className="text-5xl font-bold mb-5">New Collection</h1>
            <p className="text-lg mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <button className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition">Shop Now</button>
            <div className="flex justify-center items-center space-x-4 mt-10">
                <span className="cursor-pointer">◀</span>
                <span>1 / 4</span>
                <span className="cursor-pointer">▶</span>
            </div>
        </section>
    );
};

export default Hero;
