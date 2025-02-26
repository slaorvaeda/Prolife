import React, { useEffect } from 'react';
import NavMenu from './NavMenu';
import MobileMenu from './MobileMenu';

function Navbar(props) {
    useEffect(() => {
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");

        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });

        return () => {
            btn.removeEventListener("click", () => {
                menu.classList.toggle("hidden");
            });
        };
    }, []);

    return (
        <>
            <nav className="bg-white dark:bg-black dark:border-amber-50 dark:border-b-2  shadow-lg w-full text-md ">
                <div className="content-center">
                    <div className="flex justify-around w-full">
                        <div className="flex space-x-4">
                            <div>
                                <a href="#" className="flex items-center py-5 px-2 text-gray-700 dark:text-gray-300">
                                    <img src={props.logo} alt="Logo" className="md:h-10 h-6" />
                                </a>
                            </div>
                        </div>
                        <NavMenu />
                    </div>
                </div>
                <MobileMenu />
            </nav>
        </>
    );
}

export default Navbar;