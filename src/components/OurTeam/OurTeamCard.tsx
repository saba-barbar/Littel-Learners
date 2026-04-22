interface OurTeamProps {
    img: string,
    name: string,
    title: string,
    desc: string
}

function OurTeamCard({ img, name, title, desc }: OurTeamProps) {
    return (
        <>
            <div className="teamCard">
                <div className="firstSub-container">
                    <div className="sub-contain">
                        <img className="member" src={img} />
                        <h3>{name}</h3>
                    </div>
                    <div className="message"><img  src="/images/about/message.svg"/></div>
                </div>
                <div className="secSub-container">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
            </div>

        </>
    )
}

export default OurTeamCard
