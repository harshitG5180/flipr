import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/HeaderFile';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        query: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            fullName: '',
            email: '',
            query: '',
            message: '',
        });
    };

    return (
        <>
            {/* <Header /> */}
            <div className="container mx-auto px-4">
                {/* Title and Description */}
                <h2 className="text-xl font-bold mt-24 text-center">
                    CONTACT US
                </h2>
                <h2 className="text-3xl font-bold mb-4 text-center mt-4">
                    Let's Start a Conversation
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                </p>

                {/* Working Hours and Contact Info Section */}
                <div className="bg-purple p-6 rounded-lg shadow-md mb-10 max-w-lg mx-auto">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        {/* Working Hours */}
                        <div className="md:w-1/2 mb-4 md:mb-0">
                            <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
                            <p >Monday To Friday</p>
                            <p>9:00 AM to 8:00 PM</p>
                            <p className="text-sm">Our Support Team is available 24/7</p>
                        </div>

                        {/* Contact Info */}
                        <div className="md:w-1/2 md:ml-4">
                            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                            <p>020 7993 2905</p>
                            <p>hello@finsweet.com</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-lg mb-12 max-w-lg mx-auto">
                    <h3 className="text-2xl font-semibold mb-6 text-center">Contact Form</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            {/* <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label> */}
                            <input
                                placeholder='Full Name'
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                            />
                        </div>

                        <div className="mb-6">
                            {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Your Email
                            </label> */}
                            <input
                                placeholder='Email'
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                            />
                        </div>

                        <div className="mb-6">
                            {/* <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-2">
                                Query Related
                            </label> */}
                            <select
                                id="query"
                                name="query"
                                value={formData.query}
                                onChange={handleChange}
                                className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                            >
                                <option value="">Query Related</option>
                                <option value="general">General Inquiry</option>
                                <option value="technical">Technical Support</option>
                                <option value="sales">Sales Inquiry</option>
                            </select>
                        </div>

                        <div className="mb-6">
                            {/* <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label> */}
                            <textarea
                                placeholder='Message'
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full h-32 resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-yellow hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg shadow-md transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default ContactPage;
