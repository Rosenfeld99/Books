import React from 'react';
import { Link } from 'react-router-dom';
import { PiBookBookmarkFill } from "react-icons/pi";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg sticky top-0">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 text-5xl">
                        <Link to="/">
                            <PiBookBookmarkFill />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                            Home
                        </Link>
                        <Link to="/add" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                            create
                        </Link>

                    </div>
                    <div className="md:hidden">
                        <button type="button" className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                        Home
                    </Link>
                    <Link to="/add" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                        create
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
