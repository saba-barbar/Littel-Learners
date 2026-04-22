import "./OurMission.css"

import { OurMissionData } from "./OurMission"
import OurMissionCard from "./OurMissionCard"
import Title from "../../SharedComponent/Title/Title"

function OurMissionAndVission() {
    return (
        <>
        <Title span="Mission & Visions" title="Our Mission & Visions" desc="We are here to provide a nurturing and inclusive environment where 
                                            young minds can thrive, fostering a love for learning and personal growth."/>
        <div className="missionContainer">
            {OurMissionData.map((item, index) => {
                return (
                        <OurMissionCard key={index}
                            title={item.title}
                            icon={item.icon}
                            desc={item.desc}
                        />
                )
            })}

        </div>
        </>
    )
}

export default OurMissionAndVission
