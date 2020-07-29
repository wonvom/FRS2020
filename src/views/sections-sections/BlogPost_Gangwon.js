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
                  <h2>Welcome to GangWon</h2>
                  <h3 className="title-uppercase">
                    <small>Lively Gangwon</small>
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
                      Namiseom Island (남이섬)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">1, Namiseom-gil, Chuncheon-si, Gangwon-do</h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/gangwon-namiseon-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Namiseom Island was formed as a result of the construction of Cheongpyeong Dam.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    It is a half moon-shaped isle, and on it is the grave of General Nami, who led a 
                    great victory against the rebels in the 13th year of the 7th king of the Joseon 
                    dynasty, King Sejo (r. 1455-1468).
                    </p>
                    <br />
                    <p>
                    Namiseom Island is 63 kilometers away from Seoul in the direction of Chuncheon, and is 
                    famous for its beautiful tree lined roads. The island is 30 minutes away from Chuncheon 
                    and an hour away from the suburbs of Seoul. Since it is not far from Seoul, many couples 
                    and families come to visit.
                    </p>
                    <br />
                    <p>
                    A special feature of Namiseom Island is that there are no telephone poles. This is because 
                    all electric wires were built underground to keep the natural feeling of the landscape. 
                    The island is 553,560 square yards with chestnut trees and poplar trees throughout.
                    </p>
                    <br />
                    <p>
                    In the middle of the isle, there is a grass field about 316,320 square yards. It features 
                    education and training facilities and camping sites. The island also has a swimming pool 
                    and water sports facilities for motorboats and water-skiing, as well as a theme park with 
                    a merry-go-round, shooting range, and roller skating rink. Lodging facilities such as resort 
                    villas and bungalows are available for visitors to stay on the island.   
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
                                require("assets/img/location/gangwon-namiseom-2.jpg") +
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
                                require("assets/img/location/gangwon-namiseom-3.jpeg") +
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
                      Baengnyongdonggul Cave-Gangwon Paleozoic Geopark (백룡동굴-강원고생대 국가지질공원)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">63, Munhui-gil, Pyeongchang-gun, Gangwon-do </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/gangwon-baengnyong-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Baengnyongdonggul Cave is a 1.8㎞-long, natural limestone cave located in Pyeongchang-gun, Gangwon-do.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    The cave entrance is located 10-15㎞ above sea level, and is surrounded by rocks. In 1976, 
                    local residents expanded a small lane in the middle of the main cave corridor to allow for 
                    easier exploration. Since then, the cave has continued to be explored and researched with 
                    great value for geologists. The cave was designated Natural Monument No. 260 in 1979.
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
                                require("assets/img/location/gangwon-baengnyong-2.jpg") +
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
                                require("assets/img/location/gangwon-baengnyong-3.jpg") +
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
                      Gangchon Rail Park (강촌 레일파크)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">1383, Gimyujeong-ro, Chuncheon-si, Gangwon-do (Sindong-myeon)</h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/gangwon-gangchon-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>The Gyeongchun Line</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    When the Gyeongchun Line, a double-tracked railway line connecting Seoul and Chuncheon, 
                    opened on December 20, 2010, it replaced the Mugunghwa train that traveled this route for 
                    70 years. Built on the discontinued train line, Gangchon Rail Park is a popular tourist 
                    attraction where visitors can pedal along old railroad tracks while taking in the lovely Bukhangang River scenery.
                    
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
                                require("assets/img/location/gangwon-gangchon-2.jpg") +
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
                                require("assets/img/location/gangwon-gangchon-3.jpg") +
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
