import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Animated} from "react-animated-css";

const ObjectiveHeader = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="align-items-end pt-4" style={{textAlign:"right"}}>
            <Animated animationIn={'zoomIn'}>
            <div className="pr-lg-5">
            
              <h1 className="mb-4 font-weight-normal line-height-1_4">Codess Cafe's<br/><span className="text-primary font-weight-medium">Objectives</span></h1>
              <p className="text-muted mb-4 pb-2">
             Empowering next generation of women in tech
             </p>
            </div>
            </Animated>
          </Col>
          <Col lg={6}>
            <Animated animationIn={'slideInRight'}>
                <div className="mt-5 mt-lg-0">
                <img src="/objective.png" alt="" className="img-fluid me-auto d-block" style={{height:"14em"}}/>
                </div>
            </Animated>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default ObjectiveHeader;