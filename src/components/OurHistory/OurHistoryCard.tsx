
interface OurHistoryProps {
    title: string,
    year: string,
    text: string
}
function OurHistoryCard({title, year, text} :OurHistoryProps) {
    return (
        <>
            <div className="history-card">
                <div className='history-line-container'>
                    <div className="history-line"></div>
                    <div className="year-card">
                        <img src="/images/about/history-img.svg"alt="" />
                        <h3>{year}</h3>
                    </div>
                </div>
                <div className="sub-container-history">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>

        </>
    )
}

export default OurHistoryCard
