import { servicesData } from "./FeeStructureData";
import "./FeeStructure.css";

function FeeStructureTable2() {
    return (
        <div className="table2">
            <div className="container2-table">
                <div className="thead">
                    <h3>Additional Services</h3>
                </div>

                <div className="tbody">
                    {servicesData.map((item, index) => (
                        <ul key={index}>
                            <li>{item.service}</li>
                            <li className="price">{item.price}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeeStructureTable2;
