import './Navigate.css';
interface NavigateCardProps{

    title:string;
    desc:string;
}

function NavigateCard({title,desc}:NavigateCardProps) {
    return (
        <div className="navigateCard ">
            <div>
                <h3>{title}</h3>
                <img src="/images/Container.svg"/>
                <p>{desc}</p>
            </div>
            <button>
                Learn More 
                <img src='/icons/header-icon.svg'/>
            </button>
        </div>
    )
}

export default NavigateCard
