import { useEffect, useMemo, useState } from "react";
import OurTestimonialsCard from "./OurTestimonialsCard";
import "./OurTestimonials.css";
import { OurTestimonialsData } from "./OurTestimonialsData";
import Title from "../../SharedComponent/Title/Title";

function OurTestimonials() {
    const [itemsPerView, setItemsPerView] = useState(
        window.innerWidth >= 992 ? 3 : 1
    );
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const newItemsPerView = window.innerWidth >= 992 ? 3 : 1;
            setItemsPerView(newItemsPerView);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxStartIndex = useMemo(() => {
        return Math.max(0, OurTestimonialsData.length - itemsPerView);
    }, [itemsPerView]);

    useEffect(() => {
        if (currentIndex > maxStartIndex) {
            setCurrentIndex(maxStartIndex);
        }
    }, [maxStartIndex, currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev >= maxStartIndex ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev <= 0 ? maxStartIndex : prev - 1
        );
    };

    const visibleCards = OurTestimonialsData.slice(
        currentIndex,
        currentIndex + itemsPerView
    );

    return (
        <div>
            <Title
                span="Their Happy Words 🤗"
                title="Our Testimonials"
                desc="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
            />

            <div className="testimonial-slider-wrapper">
                <button
                    type="button"
                    className="slider-btn prev-btn"
                    onClick={prevSlide}
                    aria-label="Previous testimonials"
                >
                    ‹
                </button>

                <div className="OurTestimonialContainer">
                    {visibleCards.map((data, index) => (
                        <div className="testimonial-slide" key={currentIndex + index}>
                            <OurTestimonialsCard
                                img={data.icon}
                                title={data.title}
                                desc={data.desc}
                            />
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    className="slider-btn next-btn"
                    onClick={nextSlide}
                    aria-label="Next testimonials"
                >
                    ›
                </button>
                
            </div>
        </div>
    );
}

export default OurTestimonials;