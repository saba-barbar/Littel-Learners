import "./OurMission.css"
interface OurMissionCardProps {
    title: string
    icon: string
    desc: string

}
function OurMissionCard({ title, icon, desc }: OurMissionCardProps) {
    return (
        <div className="m-v-Card">
            <div className="subVission-container">
                <h3>{title}</h3>
                <img src={icon} />
            </div>
            <p>{desc}</p>
        </div>
    )
}

export default OurMissionCard