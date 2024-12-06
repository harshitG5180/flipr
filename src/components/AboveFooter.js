import React from 'react'

const AboveFooter = () => {
    return (
        <section className="bg-white text-center py-16">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Join our team to be a part of our story
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>

                {/* Button */}
                <button className="bg-yellow-500 text-white px-6 py-3 rounded font-semibold hover:bg-yellow-600">
                    Join Now
                </button>
            </div>
        </section>
    );
};

export default AboveFooter;
