import type { ReactNode } from "react"

export interface OurBenefetsCardProps {
    icon: string;
    title: string;
    desc: string
    children?: ReactNode
    index:number

}

function OurBenefetsCard({ icon, title, desc, index }: OurBenefetsCardProps) {
    return (
        <div
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            data-aos-duration="600"
            className="benefets-aos"
        >
            <div className="OurBenefetsCard">
                <div className="iconBenefets">
                    <img src={icon} />
                </div>

                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}
export default OurBenefetsCard
