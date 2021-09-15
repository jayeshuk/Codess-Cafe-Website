import React from 'react';
import { Container, Row, Col } from "reactstrap";
import {Animated} from "react-animated-css";

const FeatureBox = (props) => {
  return (
    <>
    {
      props.features.map((feature, key) =>
      (feature.id % 2 !== 0) ?
      <Animated key={key} animationIn={'slideInLeft'} animationInDelay={key+1000}>
        <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center"}>
          <Col md={5} >
            <div>
              <img src={feature.img} alt="" className="img-fluid d-block mx-auto" style={{height:"14em"}}/>
            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
              </div>
            </Col>
        </Row>
        </Animated>
      :
      <Animated key={key} animationIn={'slideInRight'} animationInDelay={3000}>
      <Row key={key} className="align-items-center">
        <Col md={6} className="order-2 order-md-1">
          <div className="mb-4">
            <div className="my-4">
              <i className="mdi mdi-account-group"></i>
            </div>
            <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
            <p className="text-muted mb-3 f-15">{feature.desc}</p>
          </div>
        </Col>
        <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0 order-1 order-md-2">
          <div>
            <img src={feature.img} alt="" className="img-fluid d-block mx-auto" style={{height:"14em"}}/>
          </div>
        </Col>
      </Row>
      </Animated>
      )
    }
    </>
  );
}
const Feature = () => {
const features = [
    {id : 1, img : "/coding.png", title : "Rigorous Coding", desc : "A carefully consolidated list of 350+ coding questions covering and strengthening the basics of interview programming is provided. The questions help form a strong base for FAANG and other MNCs."},
    {id : 2, img : "/mock.png", title : "Mock Interviews", desc : "Weekly mocks are conducted to provide an atmosphere similar to an actual interview which helps increase confidence and comfort. Participants with frequent mocks grab jobs quicker on average."},
    {id : 3, img : "/catchup.png", title : "Weekly Catch-ups", desc : "With weekly online group meetings participants share their developments and shortcomings and probable progress strategies are discussed. Weekly catch-ups give ample time to test if prep strategy works and possible amends."},
    {id : 4, img : "/progress.png", title : "Progress Tracking", desc : "Weekly meetings are used to gauge progress over the week. The progress is compared with previous weeks to anaylze improvement and growth curve and decide on changed requires to meet targets."},
    {id : 5, img : "/group.png", title : "Group Support", desc : "The presence of a group of individuals with similar goals yet different backgrounds and skill sets helps in exchange of ideas and varied ways to hone personal skills."},
    {id : 6, img : "/quickconsult.png", title : "Quick Consulting", desc : "Availability of a quick and experienced mentor is required when competing in the job market. Personal 24/7 help is provided to all the participants without fail."},
  ];
return (
    <section className="section pt-4" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
            {
              //<h3 className="font-weight-normal text-dark">Our <span className="text-warning">Objectives</span></h3>
            }
              
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
}
export default Feature;