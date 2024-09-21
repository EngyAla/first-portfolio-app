import { Col, Container, Row } from "react-bootstrap";
function NewsLetter(){
    return(
        <section className="newsletter"> 
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <h3>Subscribe to our Newsletter & Never miss latest updates</h3>
                    </Col>
                    <Col sm={12} className="email_container" md={6}> 
                        <input type="email" placeholder="Email Address" className="newsletter_email" />
                        <button className="newsletter_btn"><span>Submit</span></button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default NewsLetter;