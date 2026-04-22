import Hero from "../SharedComponent/Hero/Hero"
import OurFeature from "../components/OurFeatures/OurFeature";
import OurRooms from "../components/OurRoomsGallery/OurRooms";
import StudentLearn from "../components/StudentLearn/StudentLearn"


function Academics() {
    return (
        <>
        <Hero button="Academics" title="Nurturing Young Minds for Success" decs="Welcome to our Academics page,
                                where we take pride in providing a comprehensive and stimulating educational
                                experience for your . Our kindergarten school's academic program is thoughtfully
                                designed to foster a love for learning while building a strong foundation of essential 
                                skills and knowledge. From language arts and mathematics to science and social studies,
                                our curriculum is carefully crafted to spark curiosity and encourage active exploration."/>
        <OurFeature/>
        <StudentLearn/>
        <OurRooms/>
        </>
    )
}

export default Academics
