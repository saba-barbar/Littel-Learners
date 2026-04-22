import './Title.css'

interface TitleProps {
    span: string;
    title: string;
    desc: string;
}

export default function Title({ span, title, desc }: TitleProps) {
    return (
        <>
            <div className="container">
                <div className="title">
                    <div className="titleBtn">
                        <p>{span}</p>
                    </div>
                    <h2>{title}</h2>
                    <p className='desc'>{desc}</p>
                </div>
            </div>
        </>
    )
}