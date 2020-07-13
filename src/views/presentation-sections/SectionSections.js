import React from "react";

// reactstrap components
import {  Container, Row, Col } from "reactstrap"; // { Button } 버튼사용시 삽입

// core components

function SectionSections() {
  return (
    <>
      <div className="section section-sections section-gray">
        <Container>
          <Col className="ml-auto mr-auto" md="8">
            <div className="section-description text-center">
              <h2 className="title">Choose your travel destination</h2>
              {/* <h5 className="description">
                Build pages in no time using pre-made sections! We have created
                multiple sections for you to put together and customise into
                pixel perfect example pages. From headers to footers, you will
                be able to choose the best combination for your project.
              </h5> */}
              <br />
              {/* <Button
                className="btn-rose btn-round"
                color="default"
                href="sections.html"
                target="_blank"
              >
                View All Sections
              </Button> */}
            </div>
          </Col>
        </Container>
        <Container fluid>
          <div className="section-cols">
            <Container fluid>
              <Row>
                <Col md="3">
                  <a href = "/blog-post-seoul"><img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/Seoul.PNG")}
                  />
                  </a>
                </Col>
                <Col md="3">
                  <a href = "/blog-post-busan"><img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/Busan.PNG")}
                  />
                  </a>
                </Col>
                <Col md="3">
                  <a href = "/blog-post-daegu"><img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/Daegu.PNG")}
                  />
                  </a>
                </Col>
                <Col md="3">
                  <a href = "/blog-post-daejeon"><img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/Daejeon.PNG")}
                  />
                  </a>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                <a href = "/blog-post-busan"><img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/Gangwon.PNG")}
                  />
                  </a>
                </Col>
                <Col md="3">
                <a href = "/blog-post-gwangju"><img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/Gwangju.PNG")}
                  />
                  </a>
                </Col>
                <Col md="3">
                <a href = "/blog-post-incheon"><img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/Incheon.PNG")}
                  /></a>
                </Col>
                <Col md="3">
                <a href = "/blog-post-ulsan"><img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/Ulsan.PNG")}
                  /></a>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                <a href = "/blog-post-jeju"><img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/Jeju.PNG")}
                  />
                  </a>
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/Gyeonggi.PNG")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/Gyeongsang.PNG")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/Jeonla.PNG")}
                  />
                </Col>
              </Row>
              {/* <Row>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/blogpost-cards.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/blogpost-2-cards.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/coloured-picind-card.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/team-3.jpg")}
                  />
                </Col>
              </Row> */}
            </Container>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SectionSections;
