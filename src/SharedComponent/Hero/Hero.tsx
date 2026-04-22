import "./Hero.css"

interface HreoProps {
    button: string
    title: string
    decs: string
}
function Hero({ button, title, decs }: HreoProps) {
    return (
        <div className="shared-hero">
            <img src="/images/about/hero_img.svg" />
            <div className="hero-flex">
                <div className="sub-hero">
                    <button className="hero-btn">{button}</button>
                    <h2>{title}</h2>
                </div>
                <p>{decs}</p>
            </div>

        </div>
    )
}

export default Hero
