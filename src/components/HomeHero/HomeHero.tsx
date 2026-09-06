
import HeroCard from "./HomeHeroCard";
import "./HomeHero.css"
import CountUp from "../CountUp/CountUp";

interface HeroProps {
    img: string;

}
function HomeHero({ img }: HeroProps) {
    return (
        <div className="hero">
            <div className="hero-img-wrapper" data-aos="fade-down">
                <img className="hero-img" src={img} />
            </div>
            <HeroCard>
                <div className="sub-hero">
                    <div className="small-hero">
                        <div><p className="hero-text">Welcome to Little Learners Academy</p></div>
                        <h3 className="hero-title">Where Young Minds Blossoms and <span>Dreams Take Flight.</span> </h3>
                    </div>

                    <p className="hero-paragraph" >Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
                    <div className="sub-container" data-aos="fade-up" data-aos-delay="300" >
                        <div>
                            <CountUp end={7000} />
                            <p>Students Passed Out</p>
                        </div>
                        <div>
                            <CountUp end={37} />
                            <p>Awards & Recognitions</p>
                        </div>
                        <div>
                            <CountUp end={15} />
                            <p>Experience Educators</p>
                        </div>
                    </div>
                </div>
            </HeroCard>
        </div>
    )
}

export default HomeHero
