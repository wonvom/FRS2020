import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

// core components

function SectionOverview() {
  return (
    <>
      <div className="section section-overview">
        <Container fluid>
          <Row>
            <Col className="offset-md-2 text-center" md="8">
              <div className="space-top" />
              <h2 className="title">Want more details?</h2>
            </Col>
            <Container>
              <div className="space-top" />
              <Row>
                <Col sm="3">
                  <Card data-background="color" data-color="green">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-money-coins" />
                      </div>
                      <CardTitle tag="h4">CULTURE</CardTitle>
                      <p className="card-description">
                      Aren't you curious about Korean culture? Experience Oriental Culture
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="3">
                  <Card data-background="color" data-color="blue">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-watch-time" />
                      </div>
                      <CardTitle tag="h4">SPORTS</CardTitle>
                      <p className="card-description">
                      There are many sports to enjoy in Korea because it consists 
                      of the sea and mountain plains. Try it all in Korea.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="3">
                  <Card data-background="color" data-color="purple">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-layout-11" />
                      </div>
                      <CardTitle tag="h4">EAT</CardTitle>
                      <p className="card-description">
                      Enjoy a wide range of dishes, from traditional foods to 
                      fusion cuisine, a joint venture between the East and the West. 
                      It's no less than Michelin.
                        
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="3">
                  <Card data-background="color" data-color="brown">
                    <CardBody className="text-center">
                      <div className="card-icon">
                        <i className="nc-icon nc-align-center" />
                      </div>
                      <CardTitle tag="h4">HEALING</CardTitle>
                      <p className="card-description">
                      Are you tired of the long trip? Hot springs, forest baths, etc. 
                      There are so many factors to relieve your fatigue.

                      
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionOverview;
