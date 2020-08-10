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
                      Tosokchon Samgyetang
                      </h3>
                    </a>
                    <h6 className="title-uppercase">5, Jahamun-ro 5-gil, Jongno-gu, Seoul</h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/eat/TosokchonSamgyetang-4.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by Menupan.com
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Located near Gyeongbokgung Station, the restaurant was also frequented by late President Roh Moo-hyun.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                      It produces their ingredients like Tojongdak (Korean chicken),
                      4-years ginseng, chest nut, jujube, garlics, ginger, adlay, perilla seeds,
                      pumpkin seeds, sunflower seed, nuts, pine nut, black sesame, and etc.
                    </p>
                    <br />
                    <p>
                    Even though one has to wait to enter during lunch time,
                    do not worry about long wait as the restaurant is spacious.
                    Besides Samgyetang (ginseng chicken soup), it serves Ogol-samgyetang,
                    otdak, pajeon (green onion pancake), Rotisserie chicken, and other menus.
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
                                require("assets/img/eat/TosokchonSamgyetang-2.jpg") +
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
                                require("assets/img/eat/TosokchonSamgyetang-3.jpg") +
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
                      Myeongdong Kyoja
                      </h3>
                    </a>
                    <h6 className="title-uppercase">29, Myeongdong 10-gil, Jung-gu, Seoul (Myeong-dong 2-ga) </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/eat/MyeongdongKyoja-2.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Myeongdong Kyoja is a noodle restaurant located near Myeongdong Cathedral that has been in business for about 40 years.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    The restaurant is known for their knife-cut, handmade kalguksu (noodle soup) which is its main menu item.
                    </p>
                    <br />
                    <p>
                    These lovingly prepared noodles are served in a deep and flavorful broth with meat and vegetables, making for a delicious meal.
                    Also popular are the mandu (dumplings), bibim guksu (spicy noodles), and kongguksu (noodles in cold soybean soup).
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
                                require("assets/img/eat/MyeongdongKyoja-3.jpg") +
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
                                require("assets/img/eat/MyeongdongKyoja-4.jpg") +
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
                      Passion5
                      </h3>
                    </a>
                    <h6 className="title-uppercase">272, Itaewon-ro, Yongsan-gu, Seoul   </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/eat/Passion5-2.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Passion 5 is located near Hangangjin Station in Hannam-dong and is a premium dessert café and gallery launched by SPC Group. </h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    The Passion 5 bakery brings a whole new culture of after-dining,
                    providing customers with a diverse selection of delicious desserts including hand-made chocolates and puddings.
                    Visitors can enjoy their treats in a gallery atmosphere.
                    </p>
                    <br />
                    <p>
                    The name Passion 5 comes from the combining of five elements: the bakery, patisserie, chocolates and café.
                    The final element is the passion of those who create the desserts.
                    The desserts are exquisitely designed and each element has its own unique atmosphere.
                    In addition to the wonderful items from the bakery, there are usually 300 to 400 dessert items
                    to choose from including cakes, puddings and chocolates.
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
                                require("assets/img/eat/Passion5.jpeg") +
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
                                require("assets/img/eat/Passion5-3.jpg") +
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
