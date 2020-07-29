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
                  <h2>Welcome to Busan</h2>
                  <h3 className="title-uppercase">
                    <small>Dynamic Busan</small>
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
                      Gukje Market (남포동 국제시장)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">Sinchang-dong 4-ga, Jung-gu, Busan</h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/busan-gukjeMarket-1.png") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>The Gukje Market is one of Korea’s largest markets</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    Following the Korean War, refugees who fled to Busan set up stalls in 
                    order to make a living, and this was the beginning of the Gukje Market 
                    (gukje meaning "international" in Korean). 
                    </p>
                    <br />
                    <p>
                    The Gukje Market is one of 
                    Korea’s largest markets; each alleyway is crowded with stalls, and it 
                    connects to Bupyeong Market, Kkangtong Market, and other smaller markets. 
                    The market stocks such a wide variety of goods, that you can find almost 
                    everything you need right here.
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
                                require("assets/img/location/busan-gukjeMarket-2.jpg") +
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
                                require("assets/img/location/busan-gukjeMarket-3.jpg") +
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
                      Haeundae Beach (해운대해수욕장)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">264, Haeundaehaebyeon-ro, Haeundae-gu, Busan </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/busan-haeundaebeach-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Haeundae Beach is the most famous beach in Busan.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    The white sand beach is roughly 1.5 km long, over a 30-50 m wide area, creating a 
                    beautiful coastline before a shallow bay, making Haeundae Beach perfect for swimming.
                    </p>
                    <br />
                    <p>
                    People flock to Haeundae Beach every summer. All kinds of accommodations from luxury hotels 
                    to private guesthouses have developed in the area around the beach, making this the perfect 
                    summer vacation spot. Haeundae Beach is also famous for various cultural events and festivals 
                    held throughout the year. Other facilities in the area include Dongbaek Island, Busan Aquarium, 
                    a yachting dock, BEXCO, driving courses and more.
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
                                require("assets/img/location/busan-haeundaebeach-2.jpg") +
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
                                require("assets/img/location/busan-haeundaebeach-3.jpg") +
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
                      Gwangbok-dong Cultural & Fashion Street (광복로문화패션거리)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">Gwangbok-dong, Jung-gu, Busan  </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/busan-gwangbokstreet-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Located in Gwangbok-dong, Busan, this street captures the heart of fashion, art, culture, and shopping in Busan.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    As “Busan's Myeong-dong, it stretches from the entrance of Yongdusan Park to Gukje Market.
                    </p>
                    <br />
                    <p>
                    Across from the site of the yearly Busan International Film Festival (BIFF), Gwangbok-dong Cultural & 
                    Fashion Street is full of shops selling everything from bargain finds to luxury items. Decorated with 
                    splendid lighting, abundant flowerbeds, pleasant resting spots, and exquisite sculptures, the street is 
                    one of the most popular places among domestic and international tourists to shop and walk around in Busan.
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
                                require("assets/img/location/busan-gwangbokstreet-2.jpg") +
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
                                require("assets/img/location/busan-gwangbokstreet-3.jpg") +
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
