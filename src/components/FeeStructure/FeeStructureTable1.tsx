import { tuitionData } from "./FeeStructureData";
import "./FeeStructure.css"


function FeeStructureTable1() {
    return (
        <div className="table1">
            <div className="container-table">
                <div className="thead">
                    <ul>
                        <li>Program</li>
                        <li>Age Group</li>
                        <li>Annual Tuition</li>
                        <li>Registration Fee</li>
                        <li>Activity Fee</li>
                    </ul>
                </div>

                <div className="tbody">
                    {tuitionData.map((item, index) => (
                        <ul key={index}>
                            <li>{item.program}</li>
                            <li>{item.ageGroup}</li>
                            <li>{item.annualTuition}</li>
                            <li>{item.registrationFee}</li>
                            <li className="price">{item.activityFee}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default FeeStructureTable1
