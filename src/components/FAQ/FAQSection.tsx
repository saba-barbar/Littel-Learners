import React from "react";
import FAQCard from "./FAQCard";
import { faqData } from "./Faqdata";
import "./faq.css";
import Title from "../../SharedComponent/Title/Title";

const FAQSection: React.FC = () => {
    const leftColumn = faqData.filter((_, index) => index % 2 === 0);
    const rightColumn = faqData.filter((_, index) => index % 2 !== 0);

    return (
        <section className="faq-section" aria-labelledby="faq-heading">
            <Title
                span="Solutions For The Doubts"
                title="Frequently Asked Questions"
                desc="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
            />
            <div className="faq-columns">
                <div className="faq-column">
                    {leftColumn.map((item) => (
                        <FAQCard key={item.id} item={item} />
                    ))}
                </div>

                <div className="faq-column">
                    {rightColumn.map((item) => (
                        <FAQCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;