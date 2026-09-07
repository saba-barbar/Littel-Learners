interface OurTeamProps {
    img: string;
    name: string;
    title: string;
    desc: string;
    delay?: number;
}

function OurTeamCard({
    img,
    name,
    title,
    desc,
    delay = 0,
}: OurTeamProps) {
    return (
        <div  className="teamCard" data-aos="fade-down" data-aos-delay={delay}  data-aos-duration="700"  data-aos-easing="ease-out" >
            <div className="firstSub-container">
                <div className="sub-contain">
                    <img className="member" src={img} alt={name} />
                    <h3>{name}</h3>
                </div>

                <div className="message">
                    <img src="/images/about/message.webp" alt="" />
                </div>
            </div>

            <div className="secSub-container">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default OurTeamCard;