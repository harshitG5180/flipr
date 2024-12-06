import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/HeaderFile';

import Andrew from '../assests/Client-First - IMAGES/close-up-photography-of-man-wearing-sunglasses-1212984 (2).svg'
import postImage1 from '../assests/Client-First - IMAGES/stained-glass-high-rise-building-1106476.svg';
import postImage2 from '../assests/Client-First - IMAGES/man-in-black-crew-neck-t-shirt-sitting-beside-woman-in-gray-crew-neck-t-shirt-3153201.svg';

const Author = () => {
    return (
        <>
            {/* <Header /> */}
            <div className="bg-slate-100 py-12 px-6 pl-56 pr-56 w-full rounded-lg  mb-24">
                <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                    {/* Image Section */}
                    <img
                        src={Andrew} // Replace with the actual path of your image
                        alt="Andrew Johnson"
                        className="w-32 h-32 md:w-48 md:h-48  shadow-md"
                    />

                    {/* Text Section */}
                    <div className="text-center md:text-left w-full">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            Hey there, I'm Andrew Johnson <br /> and welcome to my Blog
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit
                            massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus
                            viverra adipiscing at in tellus.
                        </p>
                        {/* Social Media Links */}
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" className="text-gray-600 hover:text-purple-600">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-purple-600">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-purple-600">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Bottom Color Bars */}
                <div className="flex mt-6">
                    <div className="h-2 w-1/2 bg-yellow-400"></div>
                    <div className="h-2 w-1/2 bg-purple-600"></div>
                </div>
            </div>
            <div className="container mx-auto px-4 mb-24">



                <h2 className="text-4xl font-bold text-left mb-16">My Posts</h2>

                <div className="space-y-12">
                    {/* Post 1 */}
                    <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
                        <img
                            src={postImage1}
                            alt="Post 1 Image"
                            className="w-full md:w-1/3 h-auto rounded-lg shadow-md"
                        />
                        <div className="md:w-2/3 text-left">
                            <h3 className="text-purple-600 font-semibold uppercase text-sm mb-1 text-center md:text-left">
                                Business
                            </h3>
                            <h4 className="text-3xl font-bold text-gray-900 leading-tight mb-3 text-center md:text-left">
                                Font sizes in UI design: The complete guide to follow
                            </h4>
                            <p className="text-gray-600 leading-relaxed text-center md:text-left">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>


                    {/* Post 2 */}
                    <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
                        <img
                            src={postImage2}
                            alt="Post 2 Image"
                            className="w-full md:w-1/3 h-auto rounded-lg shadow-md"
                        />
                        <div className="md:w-2/3 text-left">
                            <h3 className="text-purple-600 font-semibold uppercase text-sm mb-1 text-center md:text-left">
                                Economy
                            </h3>
                            <h4 className="text-3xl font-bold text-gray-900 leading-tight mb-3 text-center md:text-left">
                                How to build rapport with your web design clients
                            </h4>
                            <p className="text-gray-600 leading-relaxed text-center md:text-left">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>

                </div>


            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Author;