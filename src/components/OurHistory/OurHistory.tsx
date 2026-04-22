import Title from "../../SharedComponent/Title/Title"
import "./OurHistory.css"
import OurHistoryCard from "./OurHistoryCard"
import { HistoryData } from "./OurHistoryData"

function OurHistory() {
    return (
        <>
            <Title
                span="Our Progressive Journey"
                title="Our History"
                desc="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
            />
            <div className="history-container">
                <div className="history" >
                    {HistoryData.map((item, index) => (
                        <OurHistoryCard
                            key={index}
                            title={item.title}
                            year={item.year}
                            text={item.text}
                        />
                    ))}
                </div>
            </div>

        </>
    )
}

export default OurHistory
