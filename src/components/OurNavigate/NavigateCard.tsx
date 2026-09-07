import './Navigate.css';
interface NavigateCardProps{
    title:string;
    desc:string;
    index:number
}
function NavigateCard({title,desc,index}:NavigateCardProps) {
    return (
        <div className="navigateCard" data-aos="fade-up" data-aos-delay={index * 100} data-aos-duration="600">
            <div>
                <h3>{title}</h3>
                <img src="/images/Container.webp"/>
                <p>{desc}</p>
            </div>
            <button>
                Learn More 
                <img src='/icons/header-icon.webp'/>
            </button>
        </div>
    )
}

export default NavigateCard
