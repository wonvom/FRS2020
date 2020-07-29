import React from "react";

// reactstrap components
import { Badge, Button, Card, Media, Container, Row, Col } from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import BlogPostHeader from "components/Headers/BlogPostHeader.js";
import FooterGray from "components/Footers/FooterGray.js";

function BlogPost() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("blog-post");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-post");
    };
  });
  return (
    <>
      <ColorNavbar />
      <BlogPostHeader />
      <div className="wrapper">
        <div className="main">
          <div className="section section-white">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center title" md="6">
                  <h2>Welcome to Ulsan</h2>
                  <h3 className="title-uppercase">
                    <small>The rising city Ulsan</small>
                  </h3>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto" md="10">
                  <div className="text-center">
                    <Badge className="main-tag" color="warning">
                      Trending
                    </Badge>
                    <a href="javascrip: void(0);">
                      <h3 className="title">
                      Daewangam Park (대왕암공원)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">140, Deungdae-ro, Dong-gu, Ulsan </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/ulsan-daewangam-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Daewangam Park is a seaside park located on the east coast.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    A 1-km trail leads to the seashore after passing through a forest of pine, 
                    cherry trees, magnolias, camellias, apricots, and forsythia. The seaside is 
                    littered with weathered rocks carved into interesting shapes by the wind and 
                    ocean. Another stroll path leads to a view of the Ulgi Lighthouse.
                    </p>
                    <br />
                    <p>
                    The park is also home to Daewangam Island, a large rock island that looks like
                     a dragon rising up into the sky. It is connected to the mainland with an iron 
                     bridge and has an observation tower.
                    </p>
                    <br />
                    </blockquote>
                  
                    <br />
                    <br />
                    <Row>
                      <Col md="6">
                        <a href="javascrip: void(0);">
                          <Card
                            data-radius="none"
                            style={{
                              backgroundImage:
                                "url(" +
                                require("assets/img/location/ulsan-daewangam-2.jpg") +
                                ")"
                            }}
                          />
                          {/* end card */}
                        </a>
                      </Col>
                      <Col md="6">
                        <a href="javascrip: void(0);">
                          <Card
                            data-radius="none"
                            style={{
                              backgroundImage:
                                "url(" +
                                require("assets/img/location/ulsan-daewangam-3.jpg") +
                                ")"
                            }}
                          />
                        </a>
                      </Col>
                    </Row>
                    <p />
                   
                  </div>
                  <br />
                 
                  <hr />
                  <Container>
                    
                    
                  </Container>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto" md="10">
                  <div className="text-center">
                    {/* <Badge className="main-tag" color="warning">
                      Trending
                    </Badge> */}
                    <a href="javascrip: void(0);">
                      <h3 className="title">
                      Jangsaengpo Whale Culture Village (장생포 고래문화마을)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">271-1, Jangsaengpogorae-ro, Nam-gu, Ulsan</h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/ulsan-jangsaengpo-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>WOpened in 2015, Jangsaengpo Whale Culture Village reproduces the scene of an old whaling village.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    Opened in 2015, Jangsaengpo Whale Culture Village reproduces the scene of an old whaling village 
                    through areas like Whale Plaza, Jangsaengpo Old Village, Prehistoric Whale Experience Garden, an 
                    aquatic botanical garden and other themed area as well as a sculpture park.
                    </p>
                    <br />
                    
                    </blockquote>
                    
                    <br />
                    <br />
                    <Row>
                      <Col md="6">
                        <a href="javascrip: void(0);">
                          <Card
                            data-radius="none"
                            style={{
                              backgroundImage:
                                "url(" +
                                require("assets/img/location/ulsan-jangsaengpo-2.jpg") +
                                ")"
                            }}
                          />
                          {/* end card */}
                        </a>
                      </Col>
                      <Col md="6">
                        <a href="javascrip: void(0);">
                          <Card
                            data-radius="none"
                            style={{
                              backgroundImage:
                                "url(" +
                                require("assets/img/location/ulsan-jangsaengpo-3.jpg") +
                                ")"
                            }}
                          />
                        </a>
                      </Col>
                    </Row>
                    <p />
                    
                    
                  </div>
                  <br />
                  
                  <hr />

                </Col>
              </Row>

              <Row>
                <Col className="ml-auto mr-auto" md="10">
                  <div className="text-center">
                    {/* <Badge className="main-tag" color="warning">
                      Trending
                    </Badge> */}
                    <a href="javascrip: void(0);">
                      <h3 className="title">
                      Taehwagang National Garden (태화강 국가정원)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">Singi-gil, Jung-gu, Ulsan  </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/ulsan-taehwagang-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>The Taehwagang River cuts across the heart of Ulsan and flows into Ulsan Bay, which is connected to the East Sea.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    The river basin, which stretches 36 kilometers from east to west and 28 kilometers from north to south, 
                    is mostly comprised of mountainous terrain, but there is fertile land on both sides of the river at the 
                    southern end of the river. The Taehwagang River is presently an important source of drinking water for 
                    the citizens of Ulsan.
                    </p>
                    <br />
                    <p>
                    Along the Taehwagang River is an extensive bamboo field covering the areas between Taehwa Bridge 
                    and Samho Bridge. The bamboo field, which is about 4 kilometers long and 20-40 kilometers wide, 
                    was created by the villagers in hopes of preventing the frequent flooding that occurred during the
                     Japanese colonial period. Today it is a rich bamboo forest. In spring, the flowering plant garden 
                     in Taehwagang National Garden offers splendid scenery created by over 60 million spring flower blossoms
                      from 7 different species that include poppies, cornflowers, and golden coreopsis. It is the largest 
                      single riverside flowering plant garden in the country.
                    </p>
                    <br />
                    </blockquote>
                    
                    <br />
                    <br />
                    <Row>
                      <Col md="6">
                        <a href="javascrip: void(0);">
                          <Card
                            data-radius="none"
                            style={{
                              backgroundImage:
                                "url(" +
                                require("assets/img/location/ulsan-taehwagang-2.jpg") +
                                ")"
                            }}
                          />
                          {/* end card */}
                        </a>
                      </Col>
                      <Col md="6">
                        <a href="javascrip: void(0);">
                          <Card
                            data-radius="none"
                            style={{
                              backgroundImage:
                                "url(" +
                                require("assets/img/location/ulsan-taehwagang-3.jpg") +
                                ")"
                            }}
                          />
                        </a>
                      </Col>
                    </Row>
                    <p />
                    
                    
                  </div>
                  <br />
                  
                  <hr />

                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <FooterGray />
    </>
  );
}

export default BlogPost;
