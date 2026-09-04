import Title from "../../SharedComponent/Title/Title"
import "./StudentLearn.css"
import StudentLearnCard from "./StudentLearnCard"
import { StudentLearnData } from "./StudentLearnData"

function StudentLearn() {
    return (
        <>
            <Title
                span="Our Features"
                title="What Students Learn"
                desc="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
            />
            <div className="student-container">
                {StudentLearnData.map((item, index) => (
                    <StudentLearnCard
                    className="box"
                        key={index}
                        title={item.title}
                        img={item.img}
                        desc={item.desc}
                    />
                ))}

            </div>

        </>
    )
}

export default StudentLearn
