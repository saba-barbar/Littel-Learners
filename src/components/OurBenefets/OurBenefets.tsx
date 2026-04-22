


import Title from "../../SharedComponent/Title/Title";
import { ourBenefetData } from "./ourBenefetData";
import OurBenefetsCard from "./OurBenefetsCard";
import "./OurBenefets.css"


function OurBenefets() {
    return (
        <div className="ourBenefets">
            <Title
                span="Children Deserve Bright Future"
                title="Our Benefits"
                desc="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
            ></Title>
            <div className="containerBenefets">
                <div className="sm-containerBenefets">
                    {ourBenefetData.map((card, index) => {
                        return (
                            <OurBenefetsCard key={index}
                                icon={card.icon}
                                title={card.title}
                                desc={card.desc}>
                            </OurBenefetsCard>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default OurBenefets
