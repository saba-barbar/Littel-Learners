
import Title from '../../SharedComponent/Title/Title'
import StudentLearnCard from '../StudentLearn/StudentLearnCard'
import { EventCelebratData } from './EventCelebratData'
import "./Events&Celebrations.css"

function EventsCelebrations() {
    return (
        <div>
            <Title span="Our Features" title="Events & Celebrations" desc="At Little Learners Academy, we celebrate every 
                                        milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include"/>
            <div className="event-container">
                {EventCelebratData.map((item, index) => (
                    <StudentLearnCard
                        className={(index%2==1 ? "box2" : "box3")}
                        key={index}
                        title={item.title}
                        img={item.img}
                        desc={item.desc}
                    />
                ))}

            </div>

        </div>
    )
}

export default EventsCelebrations
