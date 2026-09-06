import React, { useState } from "react";
import "./faq.css";

export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

interface FAQCardProps {
    item: FAQItem;
    index: number;
}

const FAQCard: React.FC<FAQCardProps> = ({ item, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-card-wrapper" data-aos="zoom-in"   data-aos-delay={index * 100} data-aos-duration="600" >
            <div className={`faq-card${isOpen ? " faq-card--open" : ""}`}>
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
        </div>
    );
};

export default FAQCard;