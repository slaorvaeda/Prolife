import React, { useEffect, useState } from 'react';

function DarkToggler() {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');

    useEffect(() => {
        const htmlElement = document.documentElement;

        const toggleTheme = () => {
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                setIsDarkMode(false);
            } else {
                htmlElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                setIsDarkMode(true);
            }
        };

        // Load theme from local storage
        if (localStorage.getItem('theme') === 'dark') {
            htmlElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            htmlElement.classList.remove('dark');
            setIsDarkMode(false);
        }

        // Cleanup event listeners on component unmount
        return () => {
            // No event listeners to clean up in this component
        };
    }, []);

    return (
        <div className="fixed bottom-0 right-0 p-4">
            <button
                id="theme-toggle"
                className="py-2 px-3 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-500"
                onClick={() => {
                    const htmlElement = document.documentElement;
                    if (htmlElement.classList.contains('dark')) {
                        htmlElement.classList.remove('dark');
                        localStorage.setItem('theme', 'light');
                        setIsDarkMode(false);
                    } else {
                        htmlElement.classList.add('dark');
                        localStorage.setItem('theme', 'dark');
                        setIsDarkMode(true);
                    }
                }}
            >
                {isDarkMode ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.66 4.66l-.71-.71M6.05 6.05l-.71-.71m12.02 12.02l-.71-.71M6.05 17.95l-.71-.71M12 5a7 7 0 100 14 7 7 0 000-14z"></path>
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.66 4.66l-.71-.71M6.05 6.05l-.71-.71m12.02 12.02l-.71-.71M6.05 17.95l-.71-.71M12 5a7 7 0 100 14 7 7 0 000-14z"></path>
                    </svg>
                )}
            </button>
        </div>
    );
}

export default DarkToggler;
