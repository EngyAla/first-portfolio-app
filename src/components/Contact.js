import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../photo/WhatsApp_Image_2024-09-15_at_14.43.19_cf14cc03-removebg-preview.png"
function Contact(){
    return(
        <section className="contact" id="contact" >
            <Container>
                <Row>
                    <Col md={6}>
                        <img src={contactImg} alt="img" className="contactImg"/>
                    </Col>
                    <Col md={6}>
                    <h2 className="contact_title">Get In Touch</h2>
                        <form>
                        <Row>
                            <Col sm={6}>
                                <input type="text" placeholder="First Name" className="firstname contact_input"/>
                            </Col>
                            <Col sm={6}>
                                <input type="text" placeholder="Last Name" className="contact_input"/>
                            </Col>
                            <Col sm={6}>
                                <input type="text" placeholder="Email Adress" className="contact_input"/>
                            </Col>
                            <Col sm={6}>
                                <input type="text" placeholder="Phone No." className="contact_input"/>
                            </Col>
                            <Col lg={12}>
                                <textarea rows={6} placeholder="Message" className="textarea contact_input"/>
                            </Col>
                            <Col>
                            <button className="contactbtn">send</button>
                            </Col>
                        </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Contact;