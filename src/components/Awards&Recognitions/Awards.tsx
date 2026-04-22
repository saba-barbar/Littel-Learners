import { useEffect, useMemo, useState } from "react";
import Title from "../../SharedComponent/Title/Title";
import OurBenefetsCard from "../OurBenefets/OurBenefetsCard";
import "./Awards.css";
import { AwardsData } from "./AwardsData";

function Awards() {
    const [cardsPerView, setCardsPerView] = useState(
        window.innerWidth >= 992 ? 3 : 1
    );
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const newCardsPerView = window.innerWidth <= 992 ? 1 : 3;
            setCardsPerView(newCardsPerView);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxStartIndex = useMemo(() => {
        return Math.max(0, AwardsData.length - cardsPerView);
    }, [cardsPerView]);

    useEffect(() => {
        if (currentIndex > maxStartIndex) {
            setCurrentIndex(maxStartIndex);
        }
    }, [maxStartIndex, currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxStartIndex : prev - 1));
    };

    const visibleCards = AwardsData.slice(
        currentIndex,
        currentIndex + cardsPerView
    );

    return (
        <>
            <Title
                span="Our Achievements"
                title="Our Awards and Recognitions"
                desc="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
            />

            <div className="awards-slider-wrapper">

                <div className="AwardsContainer">
                    {visibleCards.map((card, index) => (
                        <div className="award-slide" key={currentIndex + index}>
                            <OurBenefetsCard
                                icon={card.icon}
                                title={card.title}
                                desc={card.desc}
                            />
                        </div>
                    ))}
                </div>
                <div className="small-container">
                    <p>8 More Awards</p>
                    <div className="award-btn">
                        <button
                            type="button"
                            className="slider-btn prev-btn"
                            onClick={prevSlide}
                            aria-label="Previous awards"
                        >
                            ‹
                        </button>

                        <button
                            type="button"
                            className="slider-btn next-btn"
                            onClick={nextSlide}
                            aria-label="Next awards"
                        >
                            ›
                        </button></div>
                </div>
            </div>
        </>
    );
}

export default Awards;