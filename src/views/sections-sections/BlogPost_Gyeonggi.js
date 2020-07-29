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
                  <h2>Welcome to Gyeonggi</h2>
                  <h3 className="title-uppercase">
                    <small>Next Gyeonggi</small>
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
                      Jaraseom Island (자라섬)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">60, Jaraseom-ro, Gapyeong-gun, Gyeonggi-do</h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/gyeonggi-jaraeom-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Located in Gapyeong-gun, Gyeonggi-do, Jaraseom Island is an island formed on the Bukhangang River as
                       a result of the construction of the Cheongpyeong Dam in 1943.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    The name ‘Jaraseom’ comes from the fact that it faces a hill that resembles a Jara 
                    (Korean word for soft-shelled turtle). Jaraseom consists of four islands called Dongdo, 
                    Seodo, Jungdo, and Namdo, and has various leisure and park facilities. Visitors can find 
                    a car camping site and the filming location of the popular TV drama series 'Iris' on Seodo 
                    (west island), and an eco-cultural park with a grass plaza of over 100 meters in diameter 
                    on Jungdo (central island). There is also an ecosystem theme park called Ehwawon Garden at 
                    the westernmost tip of the Jaraseom Campground. A popular camping spot, Jaraseom Island is 
                    also widely known as the venue of the annual Jaraseom International Jazz Festival.
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
                                require("assets/img/location/gyeonggi-jaraeom-2.jpg") +
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
                                require("assets/img/location/gyeonggi-jaraeom-3.jpg") +
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
                      Everland (에버랜드)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">199, Everland-ro, Cheoin-gu, Yongin-si, Gyeonggi-do</h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/gyeonggi-everland-1.jpeg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Everland Resort entertains visitors all year long with various rides, festivals, 
                      theme areas, and Zootopia, perfect for a great amusement park.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    It houses diverse attractions which are available to enjoy with no age limits,
                     different themed festivals including Tulip Festival, Rose Festival, Summer Splash, 
                     Halloween Festival, Romantic Illumination, and other festivals all year long. One of 
                     the park’s most famous rides is T-Express, Korea’s first wooden roller coaster, 
                     popular among young visitors. Zootopia is a must-see as it spans over an area of 
                     15,000㎡ and exhibits 2,000 animals of 201 species. Lost Valley opened in 2013 and 
                     features the largest ecological safari world and offers a tour by amphibious car to 
                     see 150 animals of 20 species. A pair of giant pandas given from Chinese president
                      Xi Jinping as a symbol of friendship between Korea and China can also be seen at Panda World.
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
                                require("assets/img/location/gyeonggi-everland-2.jpeg") +
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
                                require("assets/img/location/gyeonggi-everland-3.jpg") +
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
                      Caribbean Bay (캐리비안 베이)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">199, Everland-ro, Pogok-eup, Cheoin-gu, Yongin-si, Gyeonggi-do </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/gyeonggi-caribbean-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Caribbean Bay is part of Everland theme park.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    Here, not only can you enjoy swimming and water amusement rides, but you 
                    can also relax in hot spring waters all year round. The water park has various 
                    facilities, such as the indoor and outdoor pools, a spa, a sauna, a wave pool, 
                    and slides like the Water Bobsleigh and Mega Storm. The water park is a favorite 
                    family destination. Caribbean Bay Water Park has been designed with a Caribbean 
                    theme, and it is the largest water park in the world. One of the most popular 
                    attractions in the water park is the Wave Pool where you can experience strong 
                    waves similar to those of the Caribbean Sea. The park’s cutting-edge computer 
                    system creates waves of up to 2.4 meters high.


                    
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
                                require("assets/img/location/gyeonggi-caribbean-2.jpg") +
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
                                require("assets/img/location/gyeonggi-caribbean-3.jpg") +
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
