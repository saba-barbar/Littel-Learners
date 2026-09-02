import  type {ReactNode}  from "react"
import "./Container.css"

interface containerProps{
    children:ReactNode
}

function Container({children}:containerProps) {
    return (
        <div className="project-container">
            {children}
        </div>
    )
}

export default Container
