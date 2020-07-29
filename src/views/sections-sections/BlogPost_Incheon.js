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
                  <h2>Welcome to Incheon</h2>
                  <h3 className="title-uppercase">
                    <small>All ways Incheon</small>
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
                      Yongyudo Island (용유도)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">308-13, Masiran-ro, Jung-gu, Incheon</h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/incheon-yongyudo-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Yongyudo Island is located near other islands such as Sinbuldo Island</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    Yongyudo Island and Yeongjongdo Island were once connected by a bridge. The two 
                    islands were joined as one when Incheon International Airport was constructed 
                    on a reclaimed land between these two.
                    </p>
                    <br />
                    <p>
                    Attractions on Yongyudo Island include Eulwangni Beach, Wangsan Beach, Seonnyeobawi 
                    Beach, Geojampo (a peaceful fishing port offering great views of the the sunrise and 
                    sunset), and Masian Beach (famous for its red, glowing evening sky). In early August, 
                    the island holds a variety of events such as a sea festival, fishing contests and shellfish 
                    harvesting, making it an ideal place for nature exploration.
                    </p>
                    <br />
                    <p>
                    Because of its proximity to the airport, the area resembles a resort complex due to the 
                    availability of various accommodation facilities such as a floating hotel, casino, and a golf course.
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
                                require("assets/img/location/incheon-yongyudo-2.jpg") +
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
                                require("assets/img/location/incheon-yongyudo-3.jpg") +
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
                      Wolmi Special Tourist Zone (월미 관광특구)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">81, Wolmimunhwa-ro, Jung-gu, Incheon</h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/incheon-wolmi-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Wolmi Special Tourist Zone is a historic and cultural site where visitors can learn 
                      about Korea’s modern history and culture through a tour of Incheon.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    The area has plenty of modern architecture and cultural heritages embracing the history 
                    of the open port era. Incheon Port is conveniently located to facilitate the flow of products 
                    from other civilizations.
                    </p>
                    <br />
                    <p>
                    Included in the open port, Incheon Chinatown has various Chinese restaurants, a modern history 
                    museum, and exhibition hall where visitors can look into the past and current life of Chinese 
                    people living in Korea. Jayu Park Cultural Tourism Festival and Songwol-dong Donghwa Village 
                    Festival are held here every spring.
                    </p>
                    <br />
                    <p>
                    In addition, the Museum of Korea Emigration History, date courses, and Wolmi Cultural Street, 
                    offering up various sliced raw fish restaurants, and fine cafes are all available in the zone. 
                    Wolmi Observatory offers a view overlooking a port and downtown at once. The coastal pier 
                    approaching the port offers the active atmosphere of coming and going ships and the lively 
                    fish market. Enjoying various fish dishes and sea-fishing, or walking along the ocean square 
                    are recommended activities.
                    </p>
                    <br />
                    <p>
                    * Current State of Wolmi Special Tourist Zone
                    1) Districts Covered: Areas around Yeonan, Shinheung, Bukseong, Dongincheon and Sinpo-dong, Jung-gu, Incheon
                    2) Area: 3,000,898㎡
                    3) Designated on June 26, 2001
                    * Tourist Attractions
                    Jayu Park, Chinatown, Open Port, coastal pier approaching the port, Wolmido Island, surrounding area
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
                                require("assets/img/location/incheon-wolmi-2.jpg") +
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
                                require("assets/img/location/incheon-wolmi-3.jpg") +
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
                      Incheon Chinatown (인천 차이나타운)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">14, Chinatown-ro 52beon-gil, Jung-gu, Incheon </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/incheon-chinatown-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Incheon's Chinatown came into being with the opening of Incheon Port in 1883</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    Incheon's designation as an extraterritoriality of the Ching Dynasty in the following year. 
                    In the past, the area held many stores trading goods imported from China, but currently most 
                    Chinese businesses in the area are restaurants. Today, the residents of Chinatown are mostly 
                    2nd or 3rd generation Chinese, descendents of the early Chinese settlers.  The area harbors many 
                    of the flavors of China, while the traditional culture of the first generation are preserved.


                    
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
                                require("assets/img/location/incheon-chinatown-2.jpg") +
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
                                require("assets/img/location/incheon-chinatown-3.jpg") +
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
