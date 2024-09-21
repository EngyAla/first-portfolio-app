import ProjectCard from "./projectCard";
import Contact from "./Contact";
import { Col, Container, Row } from "react-bootstrap"
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import projectImg1 from "../photo/WhatsApp Image 2024-09-19 at 21.43.04_0055d51b.jpg"
import projectImg2 from "../photo/WhatsApp Image 2024-09-19 at 21.43.32_f7e0671b.jpg"
import projectImg3 from "../photo/WhatsApp Image 2024-09-19 at 21.43.55_a9943e83.jpg"
import bg_right from '../photo/color-sharp2.png';
function Projects(){
    const projects =[
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projectImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projectImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projectImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projectImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projectImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projectImg3,
        },
    ]
    return(
    <section>
        <Container className="projects" id="project">
            <Row>
                <Col>
                <h2 className="projects_title">Projects</h2>
                <p>My name is Engy, I live in masoura. This my proj in react Dev.</p>
                <Tab.Container id="projects_tap" defaultActiveKey="first">
                    <Nav variant="pills">
                        <Nav.Item>
                            <Nav.Link eventKey="first" className="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second" className="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third" className="third">Tab Three</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content >
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index)=>{
                                        return(
                                            <ProjectCard 
                                                    key={index}
                                                    {...project}/>
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second"><Contact /></Tab.Pane>
                        <Tab.Pane eventKey="third"><p>My name is Engy, I live in masoura. This my proj in react Dev...</p></Tab.Pane>
                    </Tab.Content>
                </Tab.Container>    
                </Col>
            </Row>
        </Container>
        <img src={bg_right} alt="img" className="bg_right"/>
    </section>

    )
}


export default Projects;