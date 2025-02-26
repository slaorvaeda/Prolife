import React from 'react';

function MobileMenu() {
    return (
        <div className="mobile-menu hidden md:hidden">
            <a href="#" className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">Home</a>
            <a href="#" className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">Product</a>
            <a href="#" className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">About</a>
            <a href="#" className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">Contact</a>
        </div>
    );
}

export default MobileMenu;  