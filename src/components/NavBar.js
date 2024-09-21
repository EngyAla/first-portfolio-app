import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import instagram from '../photo/5571598_opportunity-back-instagram-logo-hd-png-download-removebg-preview.png'
import linkedin from '../photo/pngtree-white-linkedin-icon-png-png-image_3562068-removebg-preview.png'
import facebook from '../photo/pngtree-white-facebook-icon-png-png-image_3562061-removebg-preview.png'

import { useEffect, useState } from 'react';

function NavBar(){
    const[activeLink, setactiveLink] = useState('home')
    const[scrolled, setscrolled] = useState(false)

    useEffect(()=>{
        function onScroll(){
            if(window.scrollY > 50){
                setscrolled(true)
            }else{
                setscrolled(false)
            }
        }
        window.addEventListener("scroll" , onScroll)
        return()=> window.removeEventListener("scroll" , onScroll)
    }, [])

    function UPdatedactiveLink(value){
        setactiveLink(value)
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="home">
                    <h1>LOGO</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle'/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto navbar-links">
                    <Nav.Link href="#home" className={activeLink === "home" ? 'active navbar-link' : 'navbar-link' } onClick={()=> UPdatedactiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === "skills" ? 'active navbar-link' : 'navbar-link' } onClick={()=> UPdatedactiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === "projects" ? 'active navbar-link' : 'navbar-link' } onClick={()=> UPdatedactiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href='#'><img src={linkedin} alt='linkedin' /></a>
                        <a href='#'><img src={facebook} alt='facebook' /></a>
                        <a href='#'><img src={instagram} alt='instgram' /></a>
                    </div>
                    <Nav.Link href="#contact" className={activeLink === "contact" ? 'active navbar-link' : 'navbar-link' } onClick={()=> UPdatedactiveLink('contact')}><button className='connect' onClick={() =>{console.log("connect")}}><span>Let's Connect</span></button></Nav.Link>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;