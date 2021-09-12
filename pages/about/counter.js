import React from 'react';
import { Container, Row, Col } from "reactstrap";
import CountUp from 'react-countup';
import {FaUsers} from 'react-icons/fa';
import {AiFillDollarCircle} from 'react-icons/ai';
import {MdComputer} from 'react-icons/md';
const Counter = () => {
return (
    <section className="section bg-light pt-4" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">About <span className="text-warning">Us</span></h3>
              
            </div>
          </Col>
        </Row>
        <Row style={{textAlign:"center"}}>

            <Col md={4}>
                <h6 className="text-dark font-weight-light f-20 mb-3"><MdComputer style={{fontSize:"4em", fontWeight:"800", color:"#084298"}}/></h6>
                <CountUp style={{fontSize:"2em", fontWeight:"800", color:"#95a6fb"}} start={0} end={273} delay={0} duration={2}></CountUp>
                <p className="text-muted font-weight-light">Successful mock interviews conducted for diverse range of FAANG and other MNCs</p>
            </Col>
              <Col md={4}>
                <h6 className="text-dark font-weight-light f-20 mb-3"><FaUsers style={{fontSize:"4em", fontWeight:"800", color:"#084298"}}/></h6>
                <CountUp style={{fontSize:"2em", fontWeight:"800", color:"#95a6fb"}}  start={0} end={806} delay={0} duration={2}></CountUp>
                <p className="text-muted font-weight-light">Number of hours spent in mentoring, training and supporting the program members</p>
              </Col>

              <Col md={4}>
                <h6 className="text-dark font-weight-light f-20 mb-3"><AiFillDollarCircle style={{fontSize:"4em", fontWeight:"800", color:"#084298"}}/></h6>
                <CountUp style={{fontSize:"2em", fontWeight:"800", color:"#95a6fb"}}  start={0} end={2209877} delay={0} duration={1}></CountUp>
                <p className="text-muted font-weight-light">Average CTC of women in the program who have received top-notch offers from reputed MNCs</p>
                
              </Col>
            
          
        </Row>
      </Container>
    </section>
  );
}
export default Counter;