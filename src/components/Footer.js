import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                    {/* Logo */}
                    <h1 className="text-2xl font-bold">Finsweet</h1>
                    {/* Navigation Links */}
                    <ul className="flex space-x-6 mt-4 md:mt-0 text-sm">
                        <li>
                            <a href="#" className="hover:text-gray-400">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">Blog</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">About us</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">Contact us</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                        </li>
                    </ul>
                </div>

                {/* Newsletter Subscription */}
                <div className="bg-gray-800 p-6 rounded-lg mb-8">
                    <form className="flex items-center justify-between">
                        <p className="text-lg font-medium mr-4">
                            Subscribe to our newsletter to get the latest updates and news
                        </p>
                        <div className="flex flex-1">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="flex-1 p-3 rounded-l-lg border border-gray-700 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                            <button
                                type="submit"
                                className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-r-lg font-semibold hover:bg-yellow-600"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>


                {/* Bottom Section */}
                <div className="text-sm flex flex-col md:flex-row justify-between items-center">
                    <p className="mb-4 md:mb-0">Finstreet 118 2561 Fintown</p>
                    <p className="mb-4 md:mb-0">Hello@finsweet.com | 020 7993 2905</p>
                    <div className="flex space-x-4">
                        {/* Social Media Icons */}
                        <a href="#" className="hover:text-gray-400">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer