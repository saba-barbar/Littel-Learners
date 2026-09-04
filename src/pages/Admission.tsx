import AdmissionProcess from "../components/AdmissionProcess/Admission"
import FeeStructure from "../components/FeeStructure/FeeStructure"
import Container from "../SharedComponent/Container/Container"
import Hero from "../SharedComponent/Hero/Hero"


function Admission() {
    return (
        <div>
            <Container>
                <Hero title="Join Our Family of Young Learners" button="Admission" decs="At Little Learners
                        Academy, we welcome you to embark on an exciting educational journey for your child. 
                        Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"/>

                <AdmissionProcess />
                <FeeStructure/>
            </Container>

        </div>
    )
}

export default Admission
