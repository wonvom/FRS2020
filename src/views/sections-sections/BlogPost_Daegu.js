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
                  <h2>Welcome to Deagu</h2>
                  <h3 className="title-uppercase">
                    <small>Colorful Daegu</small>
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
                      Daegu Modern History Streets (대구 근대골목)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">99, Gyeongsanggamyeong-gil, Jung-gu, Daegu</h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/daegu-modernhistory-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Daegu Modern History Street offers an experience trip to see the modern history that lives on in the alleyways of Daegu.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    Compared to other regions, Daegu suffered less damage during the Korean War, 
                    allowing the city to clearly show the changes that happened from before and 
                    after the war. The course includes locations that were important venues of 
                    historical moments from the previous generations.
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
                                require("assets/img/location/daegu-modernhistory-2.jpg") +
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
                                require("assets/img/location/daegu-modernhistory-3.jpg") +
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
                      Gukchaebosang Memorial Park (국채보상운동기념공월)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">670, Gukchaebosang-ro, Jung-gu, Daegu  </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/daegu-gukchaebosang-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Construction on Gukchaebosang Memorial Park began in March 1998 and was completed in December 1999.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    The park was established to retain the spirit of the National Debt Remuneration Movement 
                    (a national movement that originated in Daegu in 1907) and to help overcome the debt crisis 
                    of 1997. The park also expanded the green space in the downtown area and offer a place of rest 
                    and relaxation to the general public.
                    </p>
                    <br />
                    <p>
                    Spanning 42,500 square meters in size, the park boasts the Dalgubeol Grand Bell, 
                    a bell pavilion, walking trails, and other amenities. The famous Dalgubeol Grand Bell
                     was installed on the park grounds in December 1998 as a representation of harmony and 
                     prosperity and to symbolically awaken the people with its pure and clear ringing.
                    </p>
                    <br />
                    <p>
                    The park has an ample parking lot (3 underground floors) and is frequented by students 
                    who study at the Central Library located within the park. Gukchaebosang Memorial Park 
                    is also a popular destination for couples because of its proximity to the Daegu downtown 
                    area. As one of the most recently established parks in Daegu, the park boasts thousands
                     of trees, a large grass plaza, and plenty of benches and resting areas. The beautiful
                      fountains, pavilion, and stone artworks add to the charms of the park. The park hosts
                       diverse cultural events such as music concerts and exhibitions and draws many visitors 
                       every Saturdays and Sundays for the ceremonial ringing of the Dalgubeol Grand Bell.

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
                                require("assets/img/location/daegu-gukchaebosang-2.jpg") +
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
                                require("assets/img/location/daegu-gukchaebosang-3.jpg") +
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
                      Daegu Seomun Market & Seomun Night Market
                      </h3>
                      <h3 className="title">
                      (대구 서문시장 & 서문시장 야시장)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">45, Keunjang-ro 26-gil, Jung-gu, Daegu  </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/daegu-seomunmarket-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Seomun Market (formerly known as Daegu-Keun Market) of Daegu is steeped in history.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    Along with Pyeongyang Market and Ganggyeong Market, Seomun Market was one of the three main 
                    markets during the Joseon dynasty. It is situated only 300 meters from the West Gate of the city, 
                    and was befittingly named Seomunsijang (West Gate Market). Although the market has grown from its 
                    small size, the names of the alleyways such as Hongdukkaejeon and Dakjeon remains unchanged.
                    </p>
                    <br />
                    <p>
                    The specialties of the current Seomun Market include fabric-related items like silk, satin, 
                    linen, cotton, knitted goods, and clothing. However, visitors to the market will also find 
                    a decent selection of crafts, silver products and dried seafood. While still traditional 
                    in many respects, Seomun Market offers modern conveniences including a heating and cooling 
                    system and a large parking lot.
                    </p>
                    <br />
                    <p>
                    The signature dish of Seomun Night Market is Cup Makchang, small servings of Korea’s 
                    soul food makchang (beef intestines). Other popular dishes include mu tteokbokki, a unique 
                    take on a classic Korean dish with thinly sliced radish, and a remake of British fare shrimp and chips.
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
                                require("assets/img/location/daegu-seomunmarket-2.jpg") +
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
                                require("assets/img/location/daegu-seomunmarket-3.jpg") +
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
