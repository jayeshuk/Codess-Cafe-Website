import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Animated} from "react-animated-css";

const AboutHeader = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <Animated animationIn={'slideInLeft'}>
            <div className="pr-lg-5">
            <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">THE NEXT GENERATION OF WOMEN CODERS </p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">Welcome to <br/><span className="text-primary font-weight-medium">Codess Cafe</span></h1>
              <p className="text-muted mb-4 pb-2">
             Empowering next generation of women in tech
             <br/>
             Helping women achieve their career goals in the software industry</p>
            </div>
            </Animated>
          </Col>
          <Col lg={6}>
            <Animated animationIn={'slideInRight'}>
                <div className="mt-5 mt-lg-0">
                <img src="/about1.png" alt="" className="img-fluid mx-auto d-block"/>
                </div>
            </Animated>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default AboutHeader;