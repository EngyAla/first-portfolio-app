import { Col } from "react-bootstrap";

function ProjectCard({title, description, imgUrl}){
    return(
        <Col sm={6} md={6} lg={4} className="proj-bx">
            <div className="proj-imgbx">
                <img src={imgUrl} alt="img" width={"350px"}/>
                <div className="proj-tex">
                    <h2>{title}</h2>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard;