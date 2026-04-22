interface StudentLearnProps {
    img: string;
    title: string;
    desc: string
}

function StudentLearnCard({ img, title, desc }: StudentLearnProps) {
    return (
        <>
            <div className="student-card">
                <div className="box"></div>
                <img src={img} />
                <div className="student-desc">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
            </div>


        </>
    )
}

export default StudentLearnCard
