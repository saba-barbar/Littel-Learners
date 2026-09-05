import "./SubHeroBotton.css"
export interface SubHeroBottonProp{
    img:string,
    span:string
}
function SubHeroBotton({img,span}:SubHeroBottonProp) {
    return (
        <div className="flex-btn">
            <img src={img} />
            <p className="contact-desc">{span}</p>
        </div>
    )
}

export default SubHeroBotton
