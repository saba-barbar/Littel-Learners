
import Title from "../../SharedComponent/Title/Title"
import "./Navigate.css"
import NavigateCard from "./NavigateCard"
import { NavigateCardData } from "./NavigateData"


function Navigate() {
    return (
        <>
            <Title title="Navigate through our Pages" span="Explore More"
                desc="Your gateway to discovering a wealth of valuable information about our
                kindergarten school, Feel free to explore and learn more about the enriching 
                experiences that await your child at our kindergarten school">

            </Title>
            <div className=" NavigateContainer ">
                {NavigateCardData.map((data, index) => {
                    return (
                        <NavigateCard key={index} title={data.title} desc={data.desc}></NavigateCard>
                    )
                })}
            </div>


        </>
    )
}

export default Navigate
