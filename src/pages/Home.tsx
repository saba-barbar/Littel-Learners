
import FAQSection from "../components/FAQ/FAQSection"
import OurBenefets from "../components/OurBenefets/OurBenefets"
import OurTestimonials from "../components/OurTestimonials/OurTestimonials"
import OurNavigate from "../components/OurNavigate/Navigate"
import HomeHero from "../components/HomeHero/HomeHero"
import Container from "../SharedComponent/Container/Container"



function Home() {
    return (
        <>
            <Container>
                {/* <Header> */}
                    <HomeHero img="/images/hero-image.svg" />
                {/* </Header> */}
                <OurBenefets />
                <OurTestimonials />
                <FAQSection />
                <OurNavigate />
            </Container >
        </>
    )
}

export default Home
