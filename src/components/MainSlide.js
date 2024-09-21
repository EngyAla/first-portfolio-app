import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Row, Col } from 'react-bootstrap'
import main_Img from '../photo/Screenshot_2024-09-17_001156-removebg-preview.png'
import arrow from '../photo/Screenshot_2024-09-17_052456-removebg-preview.png'
function MainSlide(){
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Web Developer" , "Frontend Developer" , "Backend Developer"]
    const [text, setText] = useState("")
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 500;

    useEffect(() =>{
        let ticker = setInterval(()=>{
            tick();
        }, delta)
        return() =>{clearInterval(ticker)}
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length
        // console.log(loopNum)
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1)
        setText(updatedText)

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        } else if(isDeleting && updatedText === ""){
            setIsDeleting(false)
            setDelta(period)
            setLoopNum(loopNum +1)
            setDelta(500)
        }
    }

    return(
<section className='MainSlide'>
        <Container id='home'>
            <Row>
                <Col xs={12} md={6} xl={10}>
                    <span className='tag_line'>welcome to my portfolio</span>
                    <h1>{"Hi! I'm Engy Alaa"} <span className='wrab'>{text}</span></h1>
                    <p>Hello Everyone.I have 6 months of Experience in Frondend and No Experience in Backend</p>
                    <a href='#contact'> <button onClick={() =>{console.log("connect")}}>Let's connect <img src={arrow} width={"42px"}/></button></a>
                </Col>
            </Row>
                <Col xs={12} md={6} xl={4}>
                <img src={main_Img} alt='mainImg' className='anamated_img'/>
                </Col>
        </Container>
    </section>
    )
}

export default MainSlide;