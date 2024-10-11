// src/Components/ScrollToTop.jsx
import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <button onClick={scrollToTop} style={buttonStyle}>
                    &#8679; {/* Up Arrow */}
                </button>
            )}
        </div>
    );
};

// Styles for the button
const buttonStyle = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    background: 'linear-gradient(135deg, #f0f0f0, #d9d9d9)', // Softer gradient
    color: '#333', // Dark gray for text
    border: 'none',
    borderRadius: '8px', // Slightly rounded corners
    padding: '10px 15px', // Padding for height and width
    cursor: 'pointer',
    fontSize: '18px', // Slightly smaller font size
    zIndex: 1000,
    transition: 'background-color 0.3s, transform 0.3s, box-shadow 0.3s', // Add transitions for hover effects
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Softer shadow for depth
};

// Optional: Hover effect
const buttonHoverStyle = {
    background: 'linear-gradient(135deg, #d9d9d9, #f0f0f0)', // Inverted gradient on hover
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)', // Deeper shadow on hover
    transform: 'scale(1.05)', // Slightly larger on hover
};

export default ScrollToTop;
