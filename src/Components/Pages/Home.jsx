import NavBar from "../Layout/NavBar"
import Container from "../Layout/Container"
import Landing from "../Layout/Landing"
import AboutMe from "../Layout/AboutMe"
import Curriculum from "../Layout/Curriculum"
import Projects from "../Layout/Projects"
import {useRef } from "react"

function Home(){
    const CurriculumRef = useRef(null)
    const ProjectsRef = useRef(null)
    const AboutRef = useRef(null)
    
    
    
    return(
        <>
            <NavBar curriculuRef={CurriculumRef} projectsRef={ProjectsRef} aboutRef={AboutRef} />
            <Container>
                <Landing/>
            </Container>
            <Container>
                <AboutMe aboutRef={AboutRef}/>
            </Container>
            
            <Container>
                <Projects projectsRef={ProjectsRef}/>
            </Container>
            <Container>
                <Curriculum curriculumRef={CurriculumRef}/>
            </Container>
        </>
    )
}
export default Home