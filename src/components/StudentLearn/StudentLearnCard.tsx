export interface StudentLearnProps {
    img: string;
    title: string;
    desc: string;
    className?:string
}

function StudentLearnCard({ img, title, desc ,className }: StudentLearnProps) {
    return (
        <>
            <div className="student-card">
                <div className={className}></div>
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
