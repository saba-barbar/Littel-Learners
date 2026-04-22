import Title from "../../SharedComponent/Title/Title"
import{FeaturesData} from "./OurFeatures"
import BenefitsCard from "../OurBenefets/OurBenefetsCard"
import './OurFeatures.css'


function OurFeature() {
    return (
        <>
            <Title
                span="Our Features"
                title="Our Special Features"
                desc="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
            />
            <div className="features-card">
                {FeaturesData.map((item, index) => (
                    <BenefitsCard
                        key={index}
                        title={item.title}
                        icon={item.icon}
                        desc={item.desc}
                    />
                ))}

            </div>

        </>
    )
}

export default OurFeature
