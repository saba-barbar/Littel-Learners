import "./TopBanner.css"

interface TopBannerProps {
    img: string;
    paragraph: string;
    // logo:string
}

function TopBanner({ img, paragraph  }: TopBannerProps) {
    return (
        <div className="toBanner">
            {/* <img className="banner-img"  src={img}></img> */}
                <p className="toBannerText">{paragraph}</p>
                <img className="toBanner-logo" src={img}></img>
        </div>
    )
}

export default TopBanner
