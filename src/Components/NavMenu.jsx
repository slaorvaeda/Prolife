import React from 'react';
import SearchBar from './SearchBar';
import DarkToggler from './DarkToggler';

function NavMenu() {
    return (
        <>
            <div className="hidden md:flex items-center space-x-1 navmenu">
                <a href="#" className="py-5 px-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</a>
                <a href="#" className="py-5 px-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Product</a>
                <a href="#" className="py-5 px-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
                <a href="#" className="py-5 px-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a>
                <DarkToggler />
            </div>

            <SearchBar />

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center">
                <button className="mobile-menu-button">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" fill="white" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </>
    );
}

export default NavMenu;