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
                  <h2>Welcome to Jeju</h2>
                  <h3 className="title-uppercase">
                    <small>Only Jeju</small>
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
                      Hallasan National Park - Jeju-do National Geopark
                      </h3>
                      <h3 className="title">
                      (한라산 (제주도 국가지질공원))
                      </h3>
                    </a>
                    <h6 className="title-uppercase">2070-61, 1100-ro, Jeju-si, Jeju-do </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/jeju-hallasan-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Hallasan Mountain stands proudly at the center of Jeju Island and is perhaps 
                      the island’s most memorable landmarks.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    Also called Yeongjusan Mountain, meaning "mountain high enough to pull the galaxy," 
                    Hallasan Mountain is widely known by scientists for its geological value. Designated 
                    as a national park in 1970, there are 368 parasitic volcanoes called Oreums (peaks) 
                    around the main mountain.
                    </p>
                    <br />
                    <p>
                    Hallasan Mountain is famous for its vertical ecosystem of plants that results from 
                    the varying temperatures along the mountainside. Over 1,800 kinds of plants and 4,000 
                    species of animals (3,300 species of insects) have been identified; to explore the 
                    mountain's treasures, simply follow one of the well-developed mountain hiking trails.
                    </p>
                    <br />
                    <p>
                    Hallasan Mountain is relatively easy to hike. With hiking courses less than 10 kilometers 
                    in length, it is possible to go to the peak and back in one day. However, the constantly 
                    changing weather brings a lot of wind, so visitors must be well prepared before hiking.
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
                                require("assets/img/location/jeju-hallasan-2.jpg") +
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
                                require("assets/img/location/jeju-hallasan-3.jpg") +
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
                      Seongsan Ilchulbong Tuff Cone [UNESCO World Heritage] (성산일출봉 [유네스코 세계문화유산])
                      </h3>
                    </a>
                    <h6 className="title-uppercase">284-12, Ilchul-ro, Seogwipo-si, Jeju-do </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/jeju-seongsan-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Seongsan Ilchulbong Tuff Cone rose 180 meters above sea level due to a 
                      magma flow under the sea over 5,000 years ago..</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    It was originally a separate island, but a build-up of sand and soil has connected 
                    it to the main island. A large crater, formed by the hot lava mixing with cold ocean water, 
                    is located at the top of Seongsan Ilchulbong Tuff Cone. The crater is about 600 meters in 
                    diameter and 90 meters deep. It has been featured in films, and was originally used for 
                    agriculture, but has now been given over to a field of silver grass. From the summit, 
                    visitors can see Udo Island, as well as take in the magnificent sunrise. The tuff cone 
                    area was designated as a natural reserve on July 19, 2000.
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
                                require("assets/img/location/jeju-seongsan-2.jpg") +
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
                                require("assets/img/location/jeju-seongsan-3.jpg") +
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
                      Sanjicheon Stream (산지천)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">Geonip-dong, Jeju-si, Jeju-do </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/jeju-sanjicheon-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Running across from Dongmun Market in Jeju City, Sanjicheon Stream is home to a 
                      rich array of freshwater fish (e.g. sweetfish, gray mullets, Amur goby, and carps). 
                      In summer, it attracts hundreds of thousands of anglers as well as children.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    The port, downstream from Sanjicheon Stream, is renowned for picturesque views of fishing boats, 
                    egrets, and seagulls. A restored Chinese sailing vessel is exhibited at the end of the stream for 
                    visitors. Along the stream are walking paths, a park, and music fountains, in which Sanjicheon Art
                     Festival and a slew of cultural events and performances are held every summer and winter, attracting 
                     many visitors.
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
                                require("assets/img/location/jeju-sanjicheon-2.jpg") +
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
                                require("assets/img/location/jeju-sanjicheon-3.jpg") +
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
