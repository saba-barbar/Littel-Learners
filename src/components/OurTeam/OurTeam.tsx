import Title from "../../SharedComponent/Title/Title"
import "./OurTeam.css"
import OurTeamCard from "./OurTeamCard"
import {TeamCardData} from "./OurTeamData"

function OurTeam() {
    return (
        <>
        <Title span="Our Teachers With Experties" title="Our Team Members" desc="At Little Learners 
                                                Academy, our teaching team is the heart of our educational
                                                journey. We take great pride in employing highly qualified
                                                and passionate educators who possess a deep understanding 
                                                of early childhood development. Our teachers create a warm
                                                and engaging atmosphere, encouraging curiosity, instilling
                                                confidence, and fostering a love for learning."/>
        
        <div className="teamContainer">
            {TeamCardData.map((item ,index) =>{
                return(
                    <OurTeamCard  key={index}  
                    img={item.img}
                    name={item.name}
                    title={item.title}
                    desc={item.desc}/>
                )
            }
            )}
        </div>

        </>
    )
}

export default OurTeam
