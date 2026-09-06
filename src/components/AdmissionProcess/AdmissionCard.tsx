import line from "../../../public/images/line.svg"
import line2 from "../../../public/images/line2.svg"
import "./Admission.css"

export interface AdmissionCardProp {
    number: string,
    title: string,
    desc: string,
    show?: boolean,
    dataAos?: string,
    dataAosDelay?: number
}

function AdmissionCard({
    number,
    title,
    desc,
    dataAos,
    dataAosDelay
}: AdmissionCardProp) {

    return (
        <div
            className="admission-aos"
            data-aos={dataAos}
            data-aos-delay={dataAosDelay}
        >
            <div className="admission-card">

                <img src={line2} className="line2" />

                <h2 className="admission-number">
                    {number}
                </h2>

                <img src={line} alt="line" className="line" />

                <div className="admission-smCard">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>

            </div>
        </div>
    )
}

export default AdmissionCard