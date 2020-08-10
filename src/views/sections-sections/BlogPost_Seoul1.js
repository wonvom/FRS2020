import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap"; // Button, Media 삭제

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
                  <h2>Welcome to Seoul</h2>
                  <h3 className="title-uppercase">
                    <small>I SEOUL U</small>
                  </h3>
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
                      Namdaemun Market (남대문시장)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">21, Namdaemunsijang 4-gil, Jung-gu, Seoul  </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/seoul-hongdae-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Opened in 1964, Namdaemun Market is the largest traditional market in Korea with shops selling various goods.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    All products are sold at affordable prices and the stores in this area also function as wholesale markets.
                    </p>
                    <br />
                    <p>
                    Most of the goods are made directly by the storeowners. Namdaemun Market is even open overnight,
                    from 23:00 to 04:00, and is crowded with retailers from all over the country. When day breaks, the
                    site of busy shoppers bustling around the market creates a unique scene that attracts tourists worldwide.
                    Namdaemun Market sells a variety of clothes, glasses, kitchenware, toys, mountain gear, fishing equipment,
                     stationery, fine arts, accessories, hats, carpets, flowers, ginseng, and imported goods.
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
                                require("assets/img/location/seoul-hongdae-2.jpg") +
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
                                require("assets/img/location/seoul-hongdae-3.jpg") +
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
                      Gwangjang Market (광장시장)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">88, Changgyeonggung-ro, Jongno-gu, Seoul </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/shopping/GwangjangMarket.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Gwangjang Market was the first permanent market in Korea and continues to thrive as a popular tourist destination today. </h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    The second floor of the market is filled with silk, satin, and linen bed-sheet stores,
                    which are the largest and most famous in Seoul.
                    </p>
                    <br />
                    <p>
                    Many of the stores in the area even have their own factories
                    supplying fabrics to the Namdaemun Market, Pyoung Hwa Market,
                    and even to some department stores. Even though the goods are not brand-name products,
                    the wide selection of high quality goods at inexpensive prices makes it an enjoyable shopping experience.
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
                                require("assets/img/shopping/GwangjangMarket-2.jpg") +
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
                                require("assets/img/shopping/GwangjangMarket-3.jpg") +
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
                      Dongdaemun Shopping Complex·Dongdaemun Shopping Town (동대문 종합시장·동대문 쇼핑타운)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">266, Jong-ro, Jongno-gu, Seoul </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/shopping/Dongdaemun.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Dongdaemun Shopping Complex is one of Korea’s most well-known markets.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                     It was founded in December 1970 as the largest of its kind in Asia and has maintained that status for the last 40 years.
                     Browsing the plethora of shops, you can find fabric and clothing following all the latest global fashion trends.
                     Dongdaemun Shopping Complex continues to build up its reputation as a hub of international design.
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
                                require("assets/img/shopping/Dongdaemun-2.jpg") +
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
                                require("assets/img/shopping/Dongdaemun-3.jpg") +
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
