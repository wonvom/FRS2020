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
                  <h2>Welcome to Jeonju</h2>
                  <h3 className="title-uppercase">
                    <small>Your Partner Jeonju</small>
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
                      Jeonju Hanok Village [Slow City] (전주한옥마을 [슬로시티])
                      </h3>
                    </a>
                    <h6 className="title-uppercase">29, Eojin-gil, Wansan-gu, Jeonju-si, Jeollabuk-do</h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/jeonju-jeonjuhankokvilage-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Jeonju Hanok Village is located in the city of Jeonju and overlaps Pungnam-dong and Gyo-dong.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    There are 735 traditional Korean hanok houses. While the rest of city has been industrialized, 
                    Hanok Village retains its historical charms and traditions.
                    </p>
                    <br />
                    <p>
                    Jeonju Hanok Village is especially beautiful for its unique roof edges, which are slightly 
                    raised to the sky. Hanok houses are generally divided into two sections, Anchae and Sarangchae. 
                    Sarangchae is where the men dwell, and is referred to as the Seonbi room. Because men and women 
                    had to remain separate, Anchae is situated deep inside the house so that it is secretive and quiet.
                    </p>
                    <br />
                    <p>
                    Another trait of hanok is that all the houses are heated with ondol, a unique sub-floor heating system. 
                    Since Koreans enjoy sitting, eating, and sleeping on the floor, it needs to remain heated. One hanok 
                    in particular has been set aside so that tourists can experience traditional Korean life, called Hanok 
                    Life Experience Hall. You can enter the rooms to experience the warm floor first-hand.
                    </p>
                    <br />
                    <p>
                    The food provided is very traditional, which adds to the traditional ambience. At Jeonju Hanok Village, 
                    visitors can enjoy traditional Korean life and traditional foods like bibimbap, the most well known dish 
                    from the Jeonju region.
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
                                require("assets/img/location/jeonju-jeonjuhankokvilage-2.jpg") +
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
                                require("assets/img/location/jeonju-jeonjuhankokvilage-3.jpg") +
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
                      Naejangsan National Park (내장산국립공원)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">Bongdeok-gil, Bokheung-myeon, Sunchang-gun, Jeollabuk-do  </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/jeonju-naejangsan-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Naejangsan is a famous mountain in Jeollabuk-do, and the best mountain in Korea for viewing autumn’s crimson leaves.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    The park is 76,032 sq. km. in size and was designated a National Park on November 17, 
                    1971. Because of the bright crimson leaves that blanket Naejangsan Mountain in fall, 
                    the mountain is also referred to as "Geumgangsan of Honam."
                    </p>
                    <br /><p>
                    Inside the park, there are famous waterfalls, such as Dodeokpokpo Falls and Geumseonpokpo Falls, 
                    and temples such as Baekyangsa Temple and Naejangsa Temple. If you follow the valley left of the 
                    ticket booth, you can see the waters of Dodeokpokpo Falls, cascading down the cliff. If you go 
                    further along the valley you can see the waters of Geumseonpokpo Falls where even the gods have 
                    supposedly bathed. Baekyangsa Temple is both majestic and serene, surrounded by gulgeori trees 
                    that retain their lush green leaves even in winter, and also the bija trees. Along with Baekyangsa 
                    Temple, Naejangsa Temple is the place to visit during fall for its lovely autumn leaves. Besides these, 
                    there are about 760 kinds of local plants, designated Natural Monuments, and various wild animals living 
                    inside the park.
                    </p>
                    <br />
                    <p>
                    Naejangsan National Park is beautiful not only in fall, but also in spring when the azaleas and cherry 
                    blossoms bloom, in summer when the mountain turns green, and winter when the rock cliffs cover themselves 
                    with snow. All throughout the year, different kinds of wild flowers bloom here.
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
                                require("assets/img/location/jeonju-naejangsan-2.jpg") +
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
                                require("assets/img/location/jeonju-naejangsan-3.jpg") +
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
                      Jaman Mural Village (자만벽화마을)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">1-10, Jamandong 1-gil, Wansan-gu, Jeonju-si, Jeollabuk-do (the whole area of)</h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/jeonju-jaman-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Jaman Mural Village is located in the ridge between Omokdae and Imokdae along the foot of Seungamsan Mountain’s Jungbawi Rock.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    Jeonju Hanok Village is also visible from the wide street. Although it is a fairly steep walk up to 
                    Jaman Village, visitors will be able to enjoy colorful murals painted on the buildings and walls along the way.
                    
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
                                require("assets/img/location/jeonju-jaman-1.jpg") +
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
                                require("assets/img/location/jeonju-jaman-2.jpg") +
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
