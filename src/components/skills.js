import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import left_bg from '../photo/color-sharp.png'
function SkillS(){
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skills_box">
                            <h2 className="skills_box_title">Skills</h2>
                            <p>You can see My Skills Here👀</p>
                            <Carousel responsive={responsive} infinite={true} className="skill_slider">
                                <div className="item val1">
                                    <div className="outer">
                                        <div className="inner">
                                            <div id="skills_num"><h2>95%</h2></div>
                                        </div>
                                    </div>
                                    <h5>Web Development</h5>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                        <defs>
                                            <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                            </linearGradient>
                                        </defs>
                                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                     </svg>
                                </div>
                                <div className="item val2">
                                    <div className="outer">
                                        <div className="inner">
                                            <div id="skills_num"><h2>70%</h2></div>
                                        </div>
                                    </div>
                                    <h5>Brand Identity</h5>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                        <defs>
                                            <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                            </linearGradient>
                                        </defs>
                                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                     </svg>
                                </div>
                                <div className="item val4">
                                    <div className="outer">
                                        <div className="inner">
                                            <div id="skills_num"><h2>88%</h2></div>
                                        </div>
                                    </div>
                                    <h5>UI\UX</h5>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                        <defs>
                                            <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                            </linearGradient>
                                        </defs>
                                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                     </svg>
                                </div>
                                <div className="item val3">
                                    <div className="outer">
                                        <div className="inner">
                                            <div id="skills_num"><h2>67%</h2></div>
                                        </div>
                                    </div>
                                    <h5>Logo Design</h5>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                        <defs>
                                            <linearGradient id="GradientColor">
                                            <stop offset="0%" stop-color="#e91e63" />
                                            <stop offset="100%" stop-color="#673ab7" />
                                            </linearGradient>
                                        </defs>
                                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                     </svg>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={left_bg}  alt="img" className="left_bg"/>
        </section>
    );
}

export default SkillS;