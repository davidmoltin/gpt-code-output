import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
                <div>
                    <h3 className="text-xl font-bold mb-5">Catalyst</h3>
                    <p>24 Wisteria Lane, Fairview, Eagle</p>
                    <p>(555) 555-1234</p>
                    <div className="flex space-x-5 mt-5">
                        <span>📘</span>
                        <span>📸</span>
                        <span>📍</span>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold mb-3">Categories</h4>
                    <ul>
                        <li className="mb-2"><a href="https://elasticpath.dev" className="hover:text-blue-500">On Sale</a></li>
                        <li className="mb-2"><a href="https://elasticpath.dev" className="hover:text-blue-500">New Arrivals</a></li>
                        <li className="mb-2"><a href="https://elasticpath.dev" className="hover:text-blue-500">Men</a></li>
                        <li className="mb-2"><a href="https://elasticpath.dev" className="hover:text-blue-500">Women</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-3">Top Brands</h4>
                    <ul>
                        <li className="mb-2"><a href="https://elasticpath.dev" className="hover:text-blue-500">Arcmuinte</a></li>
                        <li className="mb-2"><a href="https://elasticpath.dev" className="hover:text-blue-500">Base London</a></li>
                        <li className="mb-2"><a href="https://elasticpath.dev" className="hover:text-blue-500">Birkenstock</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-3">About Us</h4>
                    <ul>
                        <li className="mb-2"><a href="https://elasticpath.dev" className="hover:text-blue-500">Contact Us</a></li>
                        <li className="mb-2"><a href="https://elasticpath.dev" className="hover:text-blue-500">Blog</a></li>
                        <li className="mb-2"><a href="https://elasticpath.dev" className="hover:text-blue-500">FAQ</a></li>
                    </ul>
                </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-10">© 2024 Store Name - Powered by BigCommerce</p>
        </footer>
    );
};

export default Footer;
