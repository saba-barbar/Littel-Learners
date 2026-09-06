export interface StudentLearnProps {
    img: string;
    title: string;
    desc: string;
    className?: string;
    dataAos?: string;
    dataAosDelay?: number;
}

function StudentLearnCard({
    img,
    title,
    desc,
    className,
    dataAos,
    dataAosDelay
}: StudentLearnProps) {
    return (
        <div
            className="student-card"
            data-aos={dataAos}
            data-aos-delay={dataAosDelay}
        >
            <div className={className}></div>

            <img src={img} />

            <div className="student-desc">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default StudentLearnCard