import Title from "../../SharedComponent/Title/Title"
import OurBenefetsCard from "../OurBenefets/OurBenefetsCard"
import "./ExtracurricularActivities.css"
import { ExtracurricularData } from "./ExtracurricularData"

function ExtracurricularActivities() {
    return (
        <div>
            <Title span="Our Features" title="Extracurricular Activities" desc="At Little Learners Academy, we believe in nurturing well-rounded individuals.
                                        Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including"/>
        
        <div className="Extracurricular">
            <div className="sm-ExtracurContainer">
        {ExtracurricularData.map((item,index)=>{
            return(
                <OurBenefetsCard key={index} icon={item.icon}
                                title={item.title} desc={item.desc}/>
            )
        })
        }
        </div>
        </div>
        </div>
    )
}

export default ExtracurricularActivities
