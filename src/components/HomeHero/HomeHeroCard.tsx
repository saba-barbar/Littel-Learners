import type{ ReactNode } from "react"
interface HeroCardProps{
    children :ReactNode;

}
function HeroCard({children}:HeroCardProps )  {
    return (
        <>
        {children}
        </>
    )
}

export default HeroCard
