import TopBanner from "../TopBanner/TopBanner"
import NavBarsection from "../NavBarsection/NavBarSection"
import "./NavBar.css"



function NavBar() {
    return (
        <div className="headerContainer">
            <TopBanner
                paragraph="Admission is Open, Grab your seat now"
                img="/icons/header-icon.svg"
            />

            <NavBarsection
                logo="/icons/nav-icon.svg"
                logoText="Littel Learners"
                items={[
                    { contant: "Home", path:"/"},
                    { contant: "About Us", path:"/about"},
                    { contant: "Academics", path:"/academics"},
                    { contant: "Admissions", path:"/admission"},
                    { contant: "Student Life", path:"/student-Life"},
                    { contant: "Contact", path:"/contact"}
                ]}
            />
        </div>
    );
}
export default NavBar
