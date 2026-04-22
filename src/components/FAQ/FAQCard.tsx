import React, { useState } from "react";
import "./faq.css";

export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

interface FAQCardProps {
    item: FAQItem;
}

const FAQCard: React.FC<FAQCardProps> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`faq-card${isOpen ? " faq-card--open" : ""}`}
            
            role="button"
            aria-expanded={isOpen}
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsOpen((prev) => !prev);
                }
            }}
        >
            <div className="faq-card__header">
                <p className="faq-card__question">{item.question}</p>
                <button
                    className="faq-card__toggle"
                    aria-label={isOpen ? "Collapse answer" : "Expand answer"}
                    onClick={() => setIsOpen((prev) => !prev)}
                    tabIndex={-1}
                    type="button"
                >
                    <span className="faq-card__toggle-icon" />
                </button>
            </div>

            <div className="faq-card__body" aria-hidden={!isOpen}>
                <hr className="faq-card__divider" />
                <p className="faq-card__answer">{item.answer}</p>
            </div>
        </div>
    );
};

export default FAQCard;