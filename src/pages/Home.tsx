
import FAQSection from "../components/FAQ/FAQSection"
import Header from "../components/Header/Header"
import OurBenefets from "../components/OurBenefets/OurBenefets"
import OurTestimonials from "../components/OurTestimonials/OurTestimonials"
import OurNavigate from "../components/OurNavigate/Navigate"
import HomeHero from "../components/HomeHero/HomeHero"



function Home() {
    return (
        <>
            <Header>
                <HomeHero img="/images/hero-image.svg" />
            </Header>
            <OurBenefets />
            <OurTestimonials />
            <FAQSection />
            <OurNavigate/>

        </>
    )
}

export default Home
