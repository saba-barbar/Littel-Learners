import Title from "../../SharedComponent/Title/Title";
import "./FeeStructure.css";
import FeeStructureTable1 from "./FeeStructureTable1";
import FeeStructureTable2 from "./FeeStructureTable2";

function FeeStructure() {
    return (
        <div>
            <Title span="Our Features" title="Fee Structure"  desc="Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen." />

            <div data-aos="fade-up">
                <FeeStructureTable1 />
            </div>
            <div data-aos="fade-up" data-aos-delay="150">
                <FeeStructureTable2 />
            </div>
        </div>
    );
}

export default FeeStructure;