import { useEffect, useMemo, useState } from "react";
import "./OurRooms.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface OurRoomsProps {
    title: string;
    images: string[];
    content: string;
    dataAos?: string;
    dataAosDelay?: number;
}

function OurRoomsCard({
    title,
    images,
    content,
    dataAos,
    dataAosDelay
}: OurRoomsProps) {

    const [cardsPerView, setCardsPerView] = useState<number>(
        window.innerWidth >= 992
            ? 4
            : window.innerWidth >= 600
                ? 2
                : 1
    );

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const cards =
                window.innerWidth >= 992
                    ? 4
                    : window.innerWidth >= 600
                        ? 2
                        : 1;

            setCardsPerView(cards);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxStartIndex = useMemo(() => {
        return Math.max(0, images.length - cardsPerView);
    }, [images.length, cardsPerView]);

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

    const visibleImages = images.slice(
        currentIndex,
        currentIndex + cardsPerView
    );

    return (
        <div className="roomCard"  data-aos={dataAos} data-aos-delay={dataAosDelay}>
            <div className="slider">
                {visibleImages.map((img, index) => (
                    <div className="slide" key={index}>
                        <img src={img} alt={title} />
                    </div>
                ))}
            </div>

            <div className="roomHeader">
                <h2>{title}</h2>
                <div className="controls">
                    <button onClick={prevSlide}>
                        <FaArrowLeft size={20} />
                    </button>
                    <button onClick={nextSlide}>
                        <FaArrowRight size={20} />
                    </button>
                </div>
            </div>

            <p>{content}</p>
        </div>
    );
}

export default OurRoomsCard;