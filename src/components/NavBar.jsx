import React from 'react';

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center py-5 px-10 bg-white shadow-md">
            <div className="text-2xl font-bold">Catalyst</div>
            <ul className="flex space-x-10">
                <li><a href="https://elasticpath.dev" className="hover:text-blue-500">Men</a></li>
                <li><a href="https://elasticpath.dev" className="hover:text-blue-500">Women</a></li>
                <li><a href="https://elasticpath.dev" className="hover:text-blue-500">Accessories</a></li>
            </ul>
            <div className="flex space-x-5">
                <span className="cursor-pointer">🔍</span>
                <span className="cursor-pointer">👤</span>
                <span className="cursor-pointer">🛒</span>
            </div>
        </nav>
    );
};

export default NavBar;
