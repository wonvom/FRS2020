import React from "react";

// reactstrap components
import {
  //Button,
  Card,
  CardBody,
  //CardFooter,
  //CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import AboutUsHeader from "components/Headers/AboutUsHeader.js";
//import FooterAboutUs from "components/Footers/FooterAboutUs.js";

function AboutUs() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("about-us");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-us");
    };
  });
  return (
    <>
      <ColorNavbar />
      <AboutUsHeader />
      <div className="main">
        <div className="section">
          <Container>
            <h3 className="title-uppercase">FRS team</h3>
            <p>
              Dankook University
            </p>
            <p>
              Practical Industry-Academic Cooperation Project
              (Capstone Design)
            </p>
            {/* <h3 className="title-uppercase">
              We
              <i className="fa fa-heart heart mr-3 ml-1" />
              what we do.
            </h3>
            <p>
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas. Dynamically innovate resource-leveling
              customer service for state of the art customer service.
            </p> */}
            <h2 className="text-center creators">Creators</h2>
            <Row>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <div className="card-avatar">
                      {/* <a href="#pablo" onClick={e => e.preventDefault()}> */}
                        <img
                          alt="..."
                          src={require("assets/img/faces/wonjong.jpg")}
                        />
                      {/* </a> */}
                    </div>
                    <p className="card-description text-center">
                      Kim Wonjong
                    </p>
                    <p>
                      Front-end developer
                    </p>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-just-icon"
                      color="instagram"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                <CardBody>
                    <div className="card-avatar">
                      {/* <a href="#pablo" onClick={e => e.preventDefault()}> */}
                        <img
                          alt="..."
                          src={require("assets/img/faces/jieun.jpg")}
                        />
                      {/* </a> */}
                    </div>
                    <p className="card-description text-center">
                      Kim Jieun
                    </p>
                    <p>
                      Front-end developer
                    </p>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-just-icon"
                      color="pinterest"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-pinterest" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                <CardBody>
                    <div className="card-avatar">
                      {/* <a href="#pablo" onClick={e => e.preventDefault()}> */}
                        <img
                          alt="..."
                          src={require("assets/img/faces/yeonji.jpg")}
                        />
                      {/* </a> */}
                    </div>
                    <p className="card-description text-center">
                      Choi Yeonji
                    </p>
                    <p>
                      Front-end developer
                    </p>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-just-icon"
                      color="pinterest"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-pinterest" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                <CardBody>
                    <div className="card-avatar">
                      {/* <a href="#pablo" onClick={e => e.preventDefault()}> */}
                        <img
                          alt="..."
                          src={require("assets/img/faces/gisung.jpg")}
                        />
                      {/* </a> */}
                    </div>
                    <p className="card-description text-center">
                      Park Gisung
                    </p>
                    <p>
                      Front-end developer
                    </p>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-just-icon"
                      color="pinterest"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-pinterest" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                <CardBody>
                    <div className="card-avatar">
                      {/* <a href="#pablo" onClick={e => e.preventDefault()}> */}
                        <img
                          alt="..."
                          src={require("assets/img/faces/minho.jpg")}
                        />
                      {/* </a> */}
                    </div>
                    <p className="card-description text-center">
                      Lee Minho
                    </p>
                    <p>
                      Back-end developer
                    </p>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-just-icon"
                      color="pinterest"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-pinterest" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                <CardBody>
                    <div className="card-avatar">
                      {/* <a href="#pablo" onClick={e => e.preventDefault()}> */}
                        <img
                          alt="..."
                          src={require("assets/img/faces/jaewoo.jpg")}
                        />
                      {/* </a> */}
                    </div>
                    <p className="card-description text-center">
                      Jeon Jaewoo
                    </p>
                    <p>
                      Back-end developer
                    </p>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-just-icon"
                      color="pinterest"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-pinterest" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                <CardBody>
                    <div className="card-avatar">
                      {/* <a href="#pablo" onClick={e => e.preventDefault()}> */}
                        <img
                          alt="..."
                          src={require("assets/img/faces/jeongjae.jpg")}
                        />
                      {/* </a> */}
                    </div>
                    <p className="card-description text-center">
                      Chee Jeong Jae
                    </p>
                    <p>
                      Back-end developer
                    </p>
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-just-icon"
                      color="pinterest"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-pinterest" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
            </Row>
            {/* <h3 className="more-info">Need more information?</h3>
            <Row className="coloured-cards">
              <Col md="4" sm="6">
                <div className="card-big-shadow">
                  <Card
                    className="card-just-text"
                    data-background="color"
                    data-color="blue"
                    data-radius="none"
                  >
                    <CardBody>
                      <h6 className="card-category">Best cards</h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Blue Card
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        What all of these have in common is that they're pulling
                        information out of the app or the service and making it
                        relevant to the moment.
                      </p>
                    </CardBody>
                  </Card> */}
                  {/* end card */}
                {/* </div>
              </Col>
              <Col md="4" sm="6">
                <div className="card-big-shadow">
                  <Card
                    className="card-just-text"
                    data-background="color"
                    data-color="green"
                    data-radius="none"
                  >
                    <CardBody>
                      <h6 className="card-category">Best cards</h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Green Card
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        What all of these have in common is that they're pulling
                        information out of the app or the service and making it
                        relevant to the moment.
                      </p>
                    </CardBody>
                  </Card> */}
                  {/* end card */}
                {/* </div>
              </Col>
              <Col md="4" sm="6">
                <div className="card-big-shadow">
                  <Card
                    className="card-just-text"
                    data-background="color"
                    data-color="yellow"
                    data-radius="none"
                  >
                    <CardBody>
                      <h6 className="card-category">Best cards</h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Yellow Card
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        What all of these have in common is that they're pulling
                        information out of the app or the service and making it
                        relevant to the moment.
                      </p>
                    </CardBody>
                  </Card> */}
                  {/* end card */}
                {/* </div>
              </Col>
            </Row> */}
          </Container>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
