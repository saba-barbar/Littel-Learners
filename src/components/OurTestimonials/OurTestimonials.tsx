import { useEffect, useRef, useState, useCallback } from "react";
import OurTestimonialsCard from "./OurTestimonialsCard";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import "./OurTestimonials.css";
import { OurTestimonialsData } from "./OurTestimonialsData";
import Title from "../../SharedComponent/Title/Title";

function OurTestimonials() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [itemsPerView, setItemsPerView] = useState(
        window.innerWidth >= 992 ? 3 : 1
    );

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const newItemsPerView = window.innerWidth >= 992 ? 3 : 1;

            setItemsPerView(newItemsPerView);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const calculateCardWidth = useCallback(() => {
        if (!containerRef.current) return;

        const containerWidth = containerRef.current.clientWidth;
        const gap = 20;

        const totalGap = gap * (itemsPerView - 1);

        const width =
            (containerWidth - totalGap) / itemsPerView;

        setCardWidth(width);
    }, [itemsPerView]);

    useEffect(() => {
        calculateCardWidth();

        window.addEventListener("resize", calculateCardWidth);

        return () => {
            window.removeEventListener(
                "resize",
                calculateCardWidth
            );
        };
    }, [calculateCardWidth]);

    const maxStartIndex = Math.max(
        0,
        OurTestimonialsData.length - itemsPerView
    );

    useEffect(() => {
        if (currentIndex > maxStartIndex) {
            setCurrentIndex(maxStartIndex);
        }
    }, [currentIndex, maxStartIndex]);

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

    const translateX =
        (cardWidth + 20) * currentIndex;

    return (
        <div>
            <Title
                span="Their Happy Words 🤗"
                title="Our Testimonials"
                desc="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."/>

            <div className="testimonial-slider-wrapper">
                <button type="button" className="slider-btn prev-btn" onClick={prevSlide} aria-label="Previous testimonials" >
                    <FaArrowLeft />
                </button>

                <div ref={containerRef} className="OurTestimonialContainer">
                    <div className="testimonial-track"
                        style={{
                            transform: `translateX(-${translateX}px)`,
                        }} >
                        {OurTestimonialsData.map((data) => (
                            <div
                                className="testimonial-slide"
                                key={data.title}
                                style={{
                                    width: `${cardWidth}px`,
                                }}  >
                                <OurTestimonialsCard
                                    img={data.icon}
                                    title={data.title}
                                    desc={data.desc}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <button type="button" className="slider-btn next-btn" onClick={nextSlide} aria-label="Next testimonials"  >
                    <FaArrowRight />
                </button>

            </div>
        </div>
    );
}

export default OurTestimonials;