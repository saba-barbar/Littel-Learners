import Title from "../../SharedComponent/Title/Title"
import OurBenefetsCard from "../OurBenefets/OurBenefetsCard"
import { StudentsSupportData } from "./StudentsSupportData"
import "./StudentSupport.css"

function StudentSupport() {
    return (
        <div>
            <Title span="Our Achievements" title="Student Support" desc="At Little Learners Academy, we are committed to 
                                            providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include"/>
            <div className="containerBenefets">
                <div className="sm-containerBenefets">
                    {StudentsSupportData.map((card, index) => {
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

export default StudentSupport
