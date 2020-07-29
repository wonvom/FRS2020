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
                  <h2>Welcome to Jeonla</h2>
                  <h3 className="title-uppercase">
                    <small>Yolo Jeonla</small>
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
                      Heuksando Island (흑산도)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">11, Jinmaeul-gil, Sinan-gun, Jeollanam-do </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/jeonla-heuksando-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Hallyeohaesang National Marine Park was designated as the first national marine park in 1968.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    Hallyeohaesang National Marine Park overs the area between Jisimdo Island in Geoje 
                    and Odongdo Island in Yeosu with six separate districts including Geoje, Tongyeong, 
                    Sacheon, Hadong, Namhae and Odongdo Island. It spans over an area of 535.676 ㎢ and 
                    the ocean accounts for 76% of the total area. The outstanding view created by the sea 
                    and land attracts over 1 million visitors every year.
                    </p>
                    <br />
                    <p>
                    Geoje is made up of 10 inhabited islands and 50 uninhabited islands. 
                    Two-thirds of the area is included in Hallyeohaesang National Marine Park, featuring 
                    Haegeumgang River, designated as Scenic Site No. 2, and Daebyeongdaedo Island & Sobyeongdaedo 
                    Island, one of the most stunning points of Hallyeo Waterway. Also, the drive on the coastal 
                    road between Yeocha and Hongpo offers a breathtaking view of Dadohae Islets unfolding from 
                    the peak of Cheonjangsan Mountain and Nojasan Mountain.
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
                                require("assets/img/location/jeonla-heuksando-2.jpg") +
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
                                require("assets/img/location/jeonla-heuksando-3.jpg") +
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
                      Geomundo Island (거문도)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">103, Geomun-gil, Yeosu-si, Jeollanam-do </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/jeonla-geomundo-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Located approximately halfway between Yeosu and Jeju Island, Geomundo Island is part of 
                        the Dadohae Maritime National Park.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    It is divided into Dongdo, Seodo, and Godo Islands, all of which offer scenic views of 
                    quaint towns and surrounding nature. Also, Geomundo is the access point for the famous 
                    Baekdo Island group, a spectacular array of uninhabited rock pinnacles attached with numerous legends.
                    </p>
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
                                require("assets/img/location/jeonla-geomundo-2.jpg") +
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
                                require("assets/img/location/jeonla-geomundo-3.jpg") +
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
                      Dolsando Island (돌산도)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">Dolsan-eup, Yeosu-si, Jeollanam-do </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/jeonla-dolsando-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Dolsando is the seventh largest island in Korea and is connected to the mainland via Dolsan Bridge.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    Ever since construction was completed on December 15, 1984, the 450 meter-long, 11.7 meter-wide 
                    bridge has become a popular tourist attraction.
                    </p>
                    <br />
                    <p>
                    There is plenty to see on Dolsando Island including numerous scenic spots and historic sites 
                    such as Dolsan Park, Musulmok Battlefield, Jeollanam-do Fisheries Exhibition Hall, Bangjukpo 
                    Beach, Hyangiram Hermitage, and Eunjeogam Hermitage. Located beneath Dolsan Bridge is a life-sized 
                    model of a Geobukseon (Turtle Ship), which played an important role in the Korean Navy’s victories 
                    during the Imjinwaeran War (1592-1598). Visitors will also find plenty of seafood restaurants lining
                     the paved coastal road.
                    </p>
                    <br />
                    </blockquote>
                    
                    <br />
                    <br />
                    
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
