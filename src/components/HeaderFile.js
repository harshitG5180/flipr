import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Header = () => {
    return (
        <header className="bg-gray-900 text-white py-4">
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo Section */}
                <Link to="/" className="hover:text-gray-400 text-3xl font-bold">Finsweet</Link>

                {/* Navigation Links */}
                <nav>
                    <ul className="flex space-x-6 text-sm">
                        <li>
                            <Link to="/" className="hover:text-gray-400">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog" className="hover:text-gray-400">Blog</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-gray-400">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/author" className="hover:text-gray-400">Author</Link>
                        </li>
                        <li>
                            <Link to="/blogpost" className="hover:text-gray-400">BlogPost</Link>
                        </li>
                        <li>
                            <Link to="/privacy-policy" className="hover:text-gray-400">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/category" className="hover:text-gray-400">Category</Link>
                        </li>
                    </ul>
                </nav>

                {/* Subscribe Button */}
                <button className="bg-white text-gray-900 px-4 py-2 rounded font-semibold hover:bg-gray-200">
                    Subscribe
                </button>
            </div>
        </header>
    );
};

export default Header;
