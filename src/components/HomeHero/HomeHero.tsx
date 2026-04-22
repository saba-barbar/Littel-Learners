
import HeroCard from "./HomeHeroCard";
import "./HomeHero.css"

interface HeroProps {
    img: string;

}
function HomeHero({ img }: HeroProps) {
    return (
        <div className="hero">
            <img className="hero-img" src={img}></img>
            <HeroCard>
                <div className="sub-hero">
                <div className="small-hero">
                    <div><p className="hero-text">Welcome to Little Learners Academy</p></div>
                    <h3 className="hero-title">Where Young Minds Blossoms and <span>Dreams Take Flight.</span> </h3>
                </div>

                <p className="hero-paragraph" >Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
                <div className="sub-container">
                    <div>
                        <h3>+7000</h3>
                        <p>Students Passed Out</p>
                    </div>
                    <div>
                        <h3>+37</h3>
                        <p>Awards & Recognitions</p>
                    </div>
                    <div>
                        <h3>+15</h3>
                        <p>Experience Educators</p>
                    </div>
                </div>
                </div>
            </HeroCard>
        </div>
    )
}

export default HomeHero
