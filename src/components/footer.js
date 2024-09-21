import { Col, Container, Row } from "react-bootstrap";
import left_bg from '../photo/color-sharp.png'
import instagram from '../photo/5571598_opportunity-back-instagram-logo-hd-png-download-removebg-preview.png'
import linkedin from '../photo/pngtree-white-linkedin-icon-png-png-image_3562068-removebg-preview.png'
import facebook from '../photo/pngtree-white-facebook-icon-png-png-image_3562061-removebg-preview.png'

function Footer(){
    return(
        <footer>
            <Container>
                <Row>
                    <Col sm={6}>
                        <h1>LOGO</h1>
                    </Col>
                    <Col sm={6}>
                        <div className='social-icon footer-social-icon'>
                            <a href='#'><img src={linkedin} alt='linkedin' /></a>
                            <a href='#'><img src={facebook} alt='facebook' /></a>
                            <a href='#'><img src={instagram} alt='instgram' /></a>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <p>--Copyrights2024-- All Rights Reserved here By Engy Alaa</p>
                    </Col>
                </Row>
            </Container>
            <img src={left_bg}  alt="img" className="left_bg_footer"/>
        </footer>
    )

}
export default Footer;