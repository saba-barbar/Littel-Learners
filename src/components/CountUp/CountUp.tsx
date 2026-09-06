import { useEffect, useRef, useState } from "react";

interface CountUpProps {
    end: number;
    duration?: number;
}

const CountUp = ({ end, duration = 2000 }: CountUpProps) => {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;

        let startTime: number | null = null;

        const animate = (currentTime: number) => {
            if (startTime === null) {
                startTime = currentTime;
            }

            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [started, end, duration]);

    return (
        <h3 ref={ref}>
            +{count}
        </h3>
    );
};

export default CountUp;

