import type{ ReactNode } from "react"
import"./Header.css"
interface HeaderPars {
    children :ReactNode;
}

function Header( {children} :HeaderPars) {
    return (
        <header className="header">
            {children}
        </header>
    )
}

export default Header
