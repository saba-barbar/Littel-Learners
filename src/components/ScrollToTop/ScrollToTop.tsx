import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import "./ScrollToTop.css";

function ScrollToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {showButton && (
                <button
                    className="scroll-to-top"
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                >
                    <FaArrowUpLong size={18} />
                </button>
            )}
        </>
    );
}

export default ScrollToTop;