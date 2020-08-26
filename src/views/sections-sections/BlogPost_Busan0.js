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
                      Hannyang Jokbal
                      </h3>
                    </a>
                    <h6 className="title-uppercase">13, Gwangbok-ro, Jung-gu, Busan </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/eat/Hannyang Jokbal.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Hanyang Jokbal is one of the most famous restaurants on the street, which is well known for jokbal.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    Hannyang Jokbal, located on Nampodong Food Street, is a Jokbal (steamed pigs’ feet)
                    ‘Matjip’ (a term that refers to the most delicious restaurants in a certain area).
                    </p>
                    <br />
                    <p>
                    The most famous dish at the restaurant is ‘Nangchae Jokbal’. This cold pigs’ feet dish is a specialty of Nampodong Food Street,
                    but is hard to find in other parts of Korea. The combination of steamed pig feet, fresh cucumber,
                    and jellyfish mixed with mustard sauce is a must-try food for visitors to Busan.
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
                                require("assets/img/eat/Hannyang Jokbal-2.jpg") +
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
                                require("assets/img/eat/Hannyang Jokbal-3.jpg") +
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
                      Halmae Gaya Milmyeon (할매가야밀면)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">56-14, Gwangbok-ro, Jung-gu, Busan </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/eat/HalmaeGayaMilmyeon.jpg") +
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
                    Halmae Gaya Milmyeon serves chewy, yellow tinted wheat noodles in a cold, clear broth.
                    </p>
                    <br />
                    <p>
                    While the dish could be considered rather simple, the tastes go extremely well together.
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
                                require("assets/img/eat/HalmaeGayaMilmyeon-2.jpg") +
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
                                require("assets/img/eat/HalmaeGayaMilmyeon-3.jpg") +
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
                      Nampo Samgyetang (남포삼계탕)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">16-1, Nampo-gil, Jung-gu, Busan </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/eat/NampoSamgyetang.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Since 1959, Nampo Samgyetang (남포 삼계탕) in the heart of Busan has been serving samgyetang (chicken ginseng soup)
                    made with fresh, homegrown ingredients.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    Brewed for as long as 24 hours, the restaurant's chicken stock is rich in flavor and nutrition.
                    Other special dishes include jeonbok samgyetang (chicken ginseng soup with abalone) and jeongi gui (electric grilled chicken).
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
                                require("assets/img/eat/NampoSamgyetang-2.jpg") +
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
                                require("assets/img/eat/NampoSamgyetang-3.jpg") +
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
