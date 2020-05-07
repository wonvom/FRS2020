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
                      Were you worried because it was too expensive when you visited various sites to travel to Korea? 
                      Use our cheap site and buy delicious food with that money.
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
                      <CardTitle tag="h4">Save Time</CardTitle>
                      <p className="card-description">
                      If you use our site, you can save more time than any other site. 
                      No hassle, no stress, just try our service.
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
                      <CardTitle tag="h4">Reactstrap Grid</CardTitle>
                      <p className="card-description">
                        Enjoy the fluid grid system based on 12 columns. Paper
                        Kit PRO React is built over Reactstrap and has all the
                        
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
                      <CardTitle tag="h4">Built with Flexbox</CardTitle>
                      <p className="card-description">
                        Paper Kit PRO React primarily uses the flexbox for the
                        layout, grid system, cards and components. This is a
                        huge advantage for working with columns.
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
