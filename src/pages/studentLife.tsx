import EventsCelebrations from "../components/Events&Celebrations/Events&Celebrations"
import ExtracurricularActivities from "../components/ExtracurricularActivities/ExtracurricularActivities"
import StudentSupport from "../components/StudentSupport/StudentSupport"
import Container from "../SharedComponent/Container/Container"
import Hero from "../SharedComponent/Hero/Hero"


function studentLife() {
  return (
    <div>
      <Container>
        <Hero button="Enriching Student Life" title="Embracing Learning with Discovery and Joy" decs="Welcome to our Student Life page, where the magic of childhood
                      comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond 
                      textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development."/>
      <ExtracurricularActivities/>
      <EventsCelebrations/>
      <StudentSupport/>
      </Container>
      
    </div>
  )
}

export default studentLife
