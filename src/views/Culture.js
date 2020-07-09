import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DangerNavbar from "components/Navbars/DangerNavbar.js";
import FooterWhite from "components/Footers/FooterWhite.js";
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import BlogPostHeader from "components/Headers/BlogPostHeader.js";
import FooterGray from "components/Footers/FooterGray.js";

function Discover() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("discover");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("discover");
    };
  });

  return (
    <>
      <ColorNavbar />
      <BlogPostHeader />
      <div className="wrapper">
        <div className="main">
          <div className="section section-white">
            
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6" xs="12">
                <h2 className="discover-title">
                  <small>Korea Traditional Culture</small>
                </h2>
                <Form className="form-inline" role="search">
                  <FormGroup>
                    <Input
                      className="border-input"
                      placeholder="Search..."
                      type="text"
                      a href = "www.google.com"
                    />    
                  </FormGroup>
                  <Button
                    className="btn-just-icon"
                    color="default"
                    type="submit"
                  >
                  <i className="fa fa-search" />
                  </Button>
                </Form>
              </Col>
            </Row>

            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center title" md="8">
                  <Card className="card-plain text-center">
                    <div className="card-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/sections/gwangHwaMoon.jpg")}
                      />
                      <h5 className="title-uppercase"></h5>
                      </a>
                      <h3 className="title">
                      GwangHwaMoon
                      </h3>
                      <h6 className="title-uppercase">161, Sajik-ro, Jongro-gu, Seoul</h6>
                      </div>
                      
                    </Card>
                  </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <div className="article-content">
                    <p>
                    <h4 className="title">Do you know GwangHwaMoon?</h4>
                    </p>
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    Built in 1395 under the reign of King Taejo, the first king of the Joseon dynasty, 
                    Gwanghwamun Gate is the southern gate of Gyeongbokgung Palace. It is also the main gate of the palace, 
                    therefore larger and fancier in comparison to the other gates. Gwanghwamun Gate consists of three arched gates; 
                    the center gate was used by the king, while the other two were used by the crown prince and royal officials. 
                    The tall granite walls of the gate serve as a platform for the wooden gate tower that watches over the city. 
                    The gate has a sign with its name written at the top center of the gate tower.
                    </p>
                    <br />
                    </blockquote>
                    <br />
                    <br />
                    <p />
                  </div>
                  <br />
                  
                  <div className = "article-content" >
                  <blockquote className="blockquote"></blockquote>
                  </div>

                  <div className="article-footer">
                    <Container>
                      <Row>
                        <Col md="6">
                          <h5>Tags:</h5>
                          <label className="label label-default mr-1">
                            Motivational
                          </label>
                          <label className="label label-default mr-1">
                            Newsletter
                          </label>
                          <Badge color="warning">Trending</Badge>
                        </Col>
                        <Col className="ml-auto" md="4">
                          <div className="sharing">
                            <h5>Spread the word</h5>
                            <Button
                              className="btn-just-icon mr-1"
                              color="twitter"
                            >
                              <i className="fa fa-twitter" />
                            </Button>
                            <Button
                              className="btn-just-icon mr-1"
                              color="facebook"
                            >
                              <i className="fa fa-facebook" />
                            </Button>
                            <Button className="btn-just-icon" color="google">
                              <i className="fa fa-google" />
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  
                  <hr />
                </Col>
              </Row>
              
                  
              <Row>
                <div className="related-articles">
                  <h3 className="title">Related articles</h3>
                  <legend />
                  <Container>
                    <Row>
                      <Col md="4">
                        <a href="pkp">
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/sections/damir-bosnjak.jpg")}
                          />
                        </a>
                        <p className="blog-title">
                          My Review of Pitchfork’s ‘Indie 500’ Album Review
                        </p>
                      </Col>
                      <Col md="4">
                        <a href="pkp">
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/sections/por7o.jpg")}
                          />
                        </a>
                        <p className="blog-title">Top Events This Month</p>
                      </Col>
                      <Col md="4">
                        <a href="pkp">
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/sections/jeff-sheldon.jpg")}
                          />
                        </a>
                        <p className="blog-title">
                          You Should Get Excited About Virtual Reality. Here’s
                          Why.
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <FooterGray />
    </>
  );
}

export default Discover;
