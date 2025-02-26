import React, { useEffect, useState } from 'react';

function AnnounceBar() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const announcements = ["Innovative appliances for home", "Check out our latest products!", "Don't miss our special offers!"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const mystyle = {
        fontSize: "15px",
        padding: "5px",
        background: "conic-gradient(blue, black, blue)",
        texttransform: "uppercase",
        
    };

    return (
        <>
            <div className="text-center text-blue-200 flex items-center justify-center" style={mystyle}>
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m-6 0h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {announcements[currentIndex]}
            </div>
        </>
    );
}

export default AnnounceBar;