import React, { useEffect } from 'react';

function SearchBar() {
    useEffect(() => {
        const searchBar = document.getElementById('search-bar');

        searchBar.addEventListener('focus', () => {
            searchBar.classList.add('lg:w-96');
            searchBar.classList.add('md:w-96');
            searchBar.classList.add('w-52');
        });

        searchBar.addEventListener('blur', () => {
            searchBar.classList.remove('lg:w-96');
            searchBar.classList.remove('md:w-96');
            searchBar.classList.remove('w-52');
        });

        // Cleanup event listeners on component unmount
        return () => {
            searchBar.removeEventListener('focus', () => {
                searchBar.classList.add('lg:w-96');
                searchBar.classList.add('md:w-96');
                searchBar.classList.add('w-52');
            });

            searchBar.removeEventListener('blur', () => {
                searchBar.classList.remove('lg:w-96');
                searchBar.classList.remove('md:w-96');
                searchBar.classList.remove('w-52');
            });
        };
    }, []);

    return (
        <div className="flex items-center">
            <input type="text" id="search-bar" className="transition-all duration-300 ease-in-out w-32 md:w-48 lg:w-64 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:bg-gray-100 dark:placeholder:text-amber-50 dark:focus:bg-gray-700" placeholder="Search..." />
        </div>
    );
}

export default SearchBar;