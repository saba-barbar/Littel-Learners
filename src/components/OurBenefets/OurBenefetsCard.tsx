import type { ReactNode } from "react"

export interface OurBenefetsCardProps {
    icon:string;
    title:string;
    desc:string
    children ?:ReactNode

}

function OurBenefetsCard({icon , title ,desc } : OurBenefetsCardProps) {
    return (
        <>
        <div className="OurBenefetsCard" >
            <div className="iconBenefets">
                <img src ={icon}></img>
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
        
        </div>
        </>
    )
}

export default OurBenefetsCard
