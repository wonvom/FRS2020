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
                      Myeong-dong (명동)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">66, Eulji-ro, Jung-gu, Seoul</h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <a href="javascrip: void(0);">
                    <Card
                      data-radius="none"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/location/seoul-myeongdong-1.jpg") +
                          ")"
                      }}
                    />
                    <p className="image-thumb text-center">
                      Photo by tourAPI3.0
                    </p>
                  </a>

                  <div className="article-content">

                    <h4>Myeong-dong is one of the primary shopping districts in Seoul.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    The two main streets meet in the center of the block with one beginning
                    from Myeong-dong Subway Station (Seoul Subway Line No. 4) and the other 
                    from Lotte Department Store at Euljiro. Many brand name shops and department 
                    stores line the streets and alleys. Common products for sale include clothes, 
                    shoes, and accessories. Unlike Namdaemun or Dongdaemun, many designer brands 
                    are sold in Myeong-dong. In addition, several major department stores have 
                    branches here, including Lotte Department Store, Shinsegae Department Store, 
                    Myeong-dong Migliore, Noon Square and M Plaza. The department stores carry 
                    many premium labels and other fashionable goods at reasonable prices.
                    </p>
                    <br />
                    <p>
                    Myeong-dong also has family restaurants, fast food, plus Korean, Western 
                    and Japanese dining options. Many restaurants in Myeong-dong specialize 
                    in dongaseu (pork cutlet) and kalguksu (noodle soup). Other businesses 
                    in the area include hair salons, banks and theaters.
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
                                require("assets/img/location/seoul-myeongdong-2.jpg") +
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
                                require("assets/img/location/seoul-myeongdong-3.jpg") +
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
                      Hongdae (Hongik University Street) (홍대)
                      </h3>
                    </a>
                    <h6 className="title-uppercase">20, Hongik-ro, Mapo-gu, Seoul </h6>
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

                    <h4>Hongdae is a neighborhood known for its youthful and romantic ambience, underground culture, and freedom of self-expression.</h4>
                    <br />
                    <blockquote className="blockquote">
                    <br />
                    <p>
                    Unique cafes, cozy galleries, accessory stores, fashion shops, live cafés and clubs, art markets, 
                    and gourmet eateries make this a popular hang-out for local youth and a fascinating place to walk 
                    around. These unique places plus the cultural events, street performances, and festivals held here 
                    make Hongdae an area that is always packed with people and excitement. Special streets such as ateliers’ 
                    street (lined with private institutions for art students preparing for university entrance exams), 
                    Picasso’s Street, and Club Street are also must-go places if you’re hoping to fully experience the Hongdae area.
                    </p>
                    <br />
                    <p>
                    [Main tourism spots in front of Hongik University]
                    * Hongdae Walking Street: Main spot of Hongdae area which has an outdoor stage for indie band performance 
                    and dynamic culture of young people.

                    * Hongdae Mural Street: Mural street stretching from Kanemaya restaurant by the back gate of Hongik University 
                    to Four Seasons House (Wausan-go 22-gil) and featuring various arrangements of painting from graffiti to artistic 
                    design. It is also referred to as ‘Picasso’s Street’ and is famous as a dating spot.

                    * Hongdae Free Market: The market is held every Saturday from March to November at Hongik Children’s Park in 
                    front of the main gate of Hongik University. All people can sign up to sell their hand-made products and other 
                    exhibitions created by artists will be shown.
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


            </Container>
          </div>
        </div>
      </div>
      <FooterGray />
    </>
  );
}

export default BlogPost;
