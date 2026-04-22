import Awards from "../components/Awards&Recognitions/Awards"
import OurHistory from "../components/OurHistory/OurHistory"
import OurMissionAndVission from "../components/OurMission&Vision/OurMissionAndVission"
import OurTeam from "../components/OurTeam/OurTeam"
import Hero from "../SharedComponent/Hero/Hero"



function About() {
    return (
        <div>
            <Hero button="Overview" title="Welcome to Little Learners Academy" decs="A leading kinder
                                    garden school dedicated to providing a nurturing and stimulating
                                    environment for young learners. With a commitment to excellence in 
                                    early education, we believe in shaping curious minds and building a
                                    strong foundation for a lifelong love of learning. Our holistic 
                                    approach fosters intellectual, social, emotional, and physical
                                    development, ensuring that each child reaches their full potential."/>
            <OurMissionAndVission/>
            <Awards/>
            <OurHistory/>
            <OurTeam/>
        </div>
    )
}

export default About
