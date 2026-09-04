
import Title from "../../SharedComponent/Title/Title"
import "./FeeStructure.css"
import FeeStructureTable1 from "./FeeStructureTable1"
import FeeStructureTable2 from "./FeeStructureTable2"


function FeeStructure() {
    return (
        <div>
            <Title span="Our Features" title="Fee Structure" desc="Our fee structure is transparent, and 
                                        we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen."/>
            <FeeStructureTable1 />
            <FeeStructureTable2 />
        </div>
    )
}

export default FeeStructure
