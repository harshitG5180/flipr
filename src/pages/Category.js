import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/HeaderFile';

import IMG from '../assests/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533.svg';

const CategoryPage = () => {
    return (
        <>
            {/* <Header /> */}
            <div className="flex flex-col w-full">
                {/* Text Section */}
                <div className="text-center w-full bg-slate-200">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4 pt-16 pb-5">
                        Business
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 pb-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Non blandit
                        massa enim nec. Scelerisque
                    </p>
                </div>

                {/* Main Content and Sidebar */}
                <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
                    {/* Blog Posts Section */}
                    <div className="flex-1 grid grid-cols-1 gap-6">
                        {/* First Post Card */}
                        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
                            <img
                                src={IMG}
                                alt="Post Image"
                                className="w-32 h-32 md:w-48 md:h-48 rounded-lg"
                            />
                            <div className="text-left">
                                <h2 className="text-xl font-bold mb-2">Top 6 free website mockup tools 2022</h2>
                                <p className="text-gray-700 mb-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <Link to="/blog/top-6-free-website-mockup-tools-2022" className="text-blue-500 hover:underline">
                                    Read more
                                </Link>
                            </div>
                        </div>

                        {/* Second Post Card */}
                        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
                            <img
                                src={IMG}
                                alt="Post Image"
                                className="w-32 h-32 md:w-48 md:h-48 rounded-lg"
                            />
                            <div className="text-left">
                                <h2 className="text-xl font-bold mb-2">Step-by-step guide to choosing great font pairs</h2>
                                <p className="text-gray-700 mb-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <Link to="/blog/step-by-step-guide-to-choosing-great-font-pairs" className="text-blue-500 hover:underline">
                                    Read more
                                </Link>
                            </div>
                        </div>

                        {/* Third Post Card */}
                        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
                            <img
                                src={IMG}
                                alt="Post Image"
                                className="w-32 h-32 md:w-48 md:h-48 rounded-lg"
                            />
                            <div className="text-left">
                                <h2 className="text-xl font-bold mb-2">Ten free Google fonts that you should use</h2>
                                <p className="text-gray-700 mb-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <Link to="/blog/ten-free-google-fonts-that-you-should-use" className="text-blue-500 hover:underline">
                                    Read more
                                </Link>
                            </div>
                        </div>

                        {/* Fourth Post Card */}
                        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
                            <img
                                src={IMG}
                                alt="Post Image"
                                className="w-32 h-32 md:w-48 md:h-48 rounded-lg"
                            />
                            <div className="text-left">
                                <h2 className="text-xl font-bold mb-2">What did I learn from doing 50+ design sprints?</h2>
                                <p className="text-gray-700 mb-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <Link to="/blog/what-did-i-learn-from-doing-50-design-sprints" className="text-blue-500 hover:underline">
                                    Read more
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Section */}
                    <div className="w-full md:w-64 bg-white border-l border-gray-200 p-4">
                        {/* Categories */}
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Categories</h2>
                            <div className="space-y-3">
                                <button className="flex items-center p-3 w-full text-gray-700 bg-gray-100 rounded-lg">
                                    <span className="mr-3">🚀</span>
                                    <span className="font-medium">Startup</span>
                                </button>
                                <button className="flex items-center p-3 w-full text-gray-700 bg-gray-100 rounded-lg">
                                    <span className="mr-3">🏢</span>
                                    <span className="font-medium">Business</span>
                                </button>
                                <button className="flex items-center p-3 w-full text-gray-700 bg-gray-100 rounded-lg">
                                    <span className="mr-3">📊</span>
                                    <span className="font-medium">Economy</span>
                                </button>
                                <button className="flex items-center p-3 w-full text-gray-700 bg-gray-100 rounded-lg">
                                    <span className="mr-3">💡</span>
                                    <span className="font-medium">Technology</span>
                                </button>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="mt-6">
                            <h2 className="text-lg font-semibold mb-4">All Tags</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                    Business
                                </span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                    Experience
                                </span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                    Screen
                                </span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                    Technology
                                </span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                    Marketing
                                </span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                    Life
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    );
};

export default CategoryPage;
