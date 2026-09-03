import Title from "../../SharedComponent/Title/Title"
import "./Admission.css"
import AdmissionCard from "./AdmissionCard"
import { AdmissionData } from "./AdmissionData"

function AdmissionProcess() {
    return (
        <div>
            <Title span="Process" title="Admission Process" desc="Embark on a remarkable educational journey with us!
                                    Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school"/>
            <div className="admission-container">
                {AdmissionData.map((item, index) => {
                    return (
                        <AdmissionCard
                            key={index}
                            number={item.number}
                            title={item.title}
                            desc={item.desc}
                        />
                    )
                })
                }

            </div>
        </div>

    )
}

export default AdmissionProcess
