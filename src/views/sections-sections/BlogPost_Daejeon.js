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
                  <h2>Welcome to Daejeon</h2>
                  <h3 className="title-uppercase">
                    <small>It's Daejeon</small>
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
                      Expo Park (대전엑스포과학공원)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">480, Daedeok-daero, Yuseong-gu, Daejeon</h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/daejeon-yuseongspecial-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Expo Park was established following the closing of the Daejeon Expo in 1993.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    The park comprises various facilities like the Hanbit Tower, the representative 
                    tower of Daejeon World Expo; Daejeon Expo Memorial Hall, remodeled to commemorate 
                    the Daejeon World Expo; World Expo Memorial Museum, exhibiting the world expo’s 
                    souvenir and symbolic objects throughout 200 years of expo history; Daejeon Traffic 
                    Culture Institute where children can join the education and history related to transportation.


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
                                require("assets/img/location/daejeon-yuseongspecial-2.jpg") +
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
                                require("assets/img/location/daejeon-yuseongspecial-3.jpg") +
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
                      Daejeon Modern History Exhibition Hall (대전근현대사전시관(옛 충남도청사 본관))
                      </h3>
                    </a>
                    <h6 className="title-uppercase">101, Jungang-ro, Jung-gu, Daejeon  </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/daejeon-modernhistory-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Daejeon Modern History Hall opened to the public on October 1, 2013 at the former 
                      main building of Chungcheongnam-do Provincial Government, Daejeon (Registered Cultural Heritage No. 18). </h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    Visitors can see various scenes of history and the development of Daejeon over the past 
                    100 years from the early 20th century to current times. Daejeon operates a planned exhibition 
                    hall, special exhibition showcasing history, architecture, design, folk style and other varied 
                    fields as well as a rotation exhibition. Also, touring the main building of Chungcheongnam-do 
                    Provincial Goverment, music concerts and various cultural education programs are available in 
                    this cultural complex.
                    </p>
                    <br />
                    <p>
                    * Former Main Building of Chungcheongnam-do Provincial Government, Daejeon (Registered Cultural Heritage No. 18)
                    * Filming site of movie "The Attorney (2013)"
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
                                require("assets/img/location/daejeon-modernhistory-2.jpg") +
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
                                require("assets/img/location/daejeon-modernhistory-3.jpg") +
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
                      Hanbat Arboretum (한밭수목원)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">169, Dunsan-daero, Seo-gu, Daejeon  </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/daejeon-hanbatarboretum-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Hanbat Arboretum, linked with the Government Complex-Daejeon and Science 
                      Park, is the largest man-made urban arboretum in Korea. </h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    It serves multiple purposes: a reservoir of genetically diverse foliage, 
                    an eco learning center for students, and a recreational area where people can 
                    relax and pass the time in the peaceful embrace of nature. The arboretum, standing 
                    on a lot measuring 387,000 square meters, is divided into three sections. The West 
                    Garden and Nammun Square opened on April 28th, 2005, while the East Garden, which 
                    consists of 19 uniquely themed parks such as the Magnolia Garden, Medicinal Herbs 
                    Garden, Rock Garden and Fruit Garden, opened on May 9th, 2009.
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
                                require("assets/img/location/daejeon-hanbatarboretum-2.jpg") +
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
                                require("assets/img/location/daejeon-hanbatarboretum-3.jpg") +
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
