import React, { useEffect, useState } from "react";
import "./ScrollToTop.css"; // Import CSS

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
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      &#8679; {/* Up Arrow Icon */}
    </button>
  );
};

export default ScrollToTop;
