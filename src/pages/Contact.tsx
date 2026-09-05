import ContactForm from "../components/ContactForm/ContactForm"
import { contactItems } from "../components/SubHeroBtn/SubHeroBottonData"
import Container from "../SharedComponent/Container/Container"
import Hero from "../SharedComponent/Hero/Hero"


function Contact() {
    return (
        <Container>
            <Hero
                button="Contact Us"
                title="Feel Free To Connect With Us"
                decs="We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods"
                btn={true}
                arrayOfItem={contactItems}
            />
            <ContactForm/>
            </Container>
    )
}

export default Contact
