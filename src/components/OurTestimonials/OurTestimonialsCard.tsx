
import "./OurTestimonials.css"
interface OurTestimonialsCardProps{
    img:string;
    title:string;
    desc:string;
}

function OurTestimonialsCard({img ,title ,desc} :OurTestimonialsCardProps) {
    return (
        <>
            <div className="ourTestimonialsCard">
                <div className="ourTestimonialsCardImg">
                    <img  src={img} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="ourTestimonialsCardStars">
                    <img src="/icons/OurTestimonialsIcon/Shape.svg" alt="" />
                    <img src="/icons/OurTestimonialsIcon/Shape.svg" alt="" />
                    <img src="/icons/OurTestimonialsIcon/Shape.svg" alt="" />
                    <img src="/icons/OurTestimonialsIcon/Shape.svg" alt="" />
                    <img src="/icons/OurTestimonialsIcon/Shape.svg" alt="" />
                </div>
                <p>{desc}</p>
            </div>

        </>
    )
}

export default OurTestimonialsCard
