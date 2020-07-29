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
                  <h2>Welcome to Gyeongsang</h2>
                  <h3 className="title-uppercase">
                    <small>Oh-So Gyeongsang</small>
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
                      Hallyeohaesang National Park (Geoje District) (한려해상국립공원-거제)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">Jangseungpo-dong, Geoje-si, Gyeongsangnam-do </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/gyeongsang-hallyeo-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Hallyeohaesang National Marine Park was designated as the first national marine park in 1968.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    Hallyeohaesang National Marine Park overs the area between Jisimdo Island in Geoje 
                    and Odongdo Island in Yeosu with six separate districts including Geoje, Tongyeong, 
                    Sacheon, Hadong, Namhae and Odongdo Island. It spans over an area of 535.676 ㎢ and 
                    the ocean accounts for 76% of the total area. The outstanding view created by the sea 
                    and land attracts over 1 million visitors every year.
                    </p>
                    <br />
                    <p>
                    Geoje is made up of 10 inhabited islands and 50 uninhabited islands. 
                    Two-thirds of the area is included in Hallyeohaesang National Marine Park, featuring 
                    Haegeumgang River, designated as Scenic Site No. 2, and Daebyeongdaedo Island & Sobyeongdaedo 
                    Island, one of the most stunning points of Hallyeo Waterway. Also, the drive on the coastal 
                    road between Yeocha and Hongpo offers a breathtaking view of Dadohae Islets unfolding from 
                    the peak of Cheonjangsan Mountain and Nojasan Mountain.
                    </p>
                    <br />
                    </blockquote>
                  
                    <br />
                    <br />
                    
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
                      Geumsan Mountain (금산 (남해))
                      </h3>
                    </a>
                    <h6 className="title-uppercase">586, Boriam-ro, Namhae-gun, Gyeongsangnam-do </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/gyeongsang-geumsan-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Namhae's Geumsan, located in Gyeongsangnam-do, is the only mountain within Hallyeo 
                        National Maritime Park to have craggy ridge lines and gorgeous rocky surfaces.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    In December of 1974, it was designated as Gyeongsangnam-do's Natural Monument No. 18, 
                    but has since gone up to No. 39 as of May 2008. The mountain also features a trail that 
                    spans eight ridge lines that you can access from Idong-myeon Bokgok Entrance, and there 
                    is also Sangju Beach in the vicinity, which attracts many tourists.
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
                                require("assets/img/location/gyeongsang-geumsan-2.jpg") +
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
                                require("assets/img/location/gyeongsang-geumsan-3.jpg") +
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
                      Bomun Tourist Complex (경주 보문관광단지)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">Sinpyeong-dong, Gyeongju-si, Gyeongsangbuk-do </h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/gyeongsang-gyeongju-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Bomun Tourist Complex is the international tourist district of Gyeongju.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    This tourist district is formed with Bomunho Lake at its center, located about 10 kilometers 
                    east of downtown Gyeongju. The area spans approximately 8,000 km², and contains an 
                    international-scale luxurious hotel, family-friendly condos, golf range, and pleasant 
                    walking passages that are designed to suit the diverse needs of tourists. The tourist 
                    complex attracts crowds of visitors in April, when cherry blossoms are in full bloom. 
                    The sight of cherry blossoms around Bomunho Lake and Bulguksa Temple are popular even among domestic travelers.
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
                                require("assets/img/location/gyeongsang-gyeongju-2.jpg") +
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
                                require("assets/img/location/gyeongsang-gyeongju-3.jpg") +
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
