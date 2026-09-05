import type { SubHeroBottonProp } from "../../components/SubHeroBtn/SubHeroBotton"
import SubHeroBotton from "../../components/SubHeroBtn/SubHeroBotton"
import "./Hero.css"

interface HreoProps {
    button: string
    title: string
    decs: string
    btn?: boolean
    arrayOfItem?: SubHeroBottonProp[] | undefined
}

function Hero({ button, title, decs, btn, arrayOfItem }: HreoProps) {
    return (
        <div className="shared-hero">
            <img
                src="/images/about/hero_img.svg"
                className="shared-hero-img"
            />

            <div className="hero-flex">
                <div className="sub-hero">
                    <button className="hero-btn">{button}</button>
                    <h2>{title}</h2>
                </div>

                <div className="hero-content">
                    <p className="desc">{decs}</p>

                    {btn && arrayOfItem && (
                        <div className="sub-hero-buttons">
                            {arrayOfItem.map((item, index) => (
                                <SubHeroBotton
                                    key={index}
                                    img={item.img}
                                    span={item.span}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Hero