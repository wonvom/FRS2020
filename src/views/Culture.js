import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import InfoNavbar from "components/Navbars/InfoNavbar.js";
import CultureHeader from "components/Headers/CultureHeader.js";
import FooterGray from "components/Footers/FooterGray.js";

function BlogPosts() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("blog-posts");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-posts");
    };
  });
  return (
    <>
      <InfoNavbar />
      <CultureHeader />
      <div className="wrapper">
        <div className="main">
          <div className="section section-white">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center title" md="6">
                  <h2>Korean Culture</h2>
                  <h3 className="title-uppercase">
                    <small>The Top3 Korean Culture</small>
                  </h3>
                </Col>
              </Row>
              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="http://api.visitkorea.or.kr/search/searchDetail.do" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/culture/Gyeongbokgung.jpeg")}
                          />
                        </a>
                        <p className="image-thumb">Photo by Visit Seoul</p>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="primary">
                            Featured
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                            Gyeongbokgung Palace
                          </CardTitle>
                        </a>
                        <h6 className="title-uppercase">Address : 161, Sajik-ro, Jongno-gu, Seoul </h6>
                        <div className="card-description">
                          <p>
                            Built in 1395, Gyeongbokgung Palace is also commonly referred to as the Northern Palace because its location is furthest north 
                            when compared to the neighboring palaces of Changdeokgung (Eastern Palace) and Gyeonghuigung (Western Palace) Palace. 
                          </p>
                          <br />
                          <p>
                            Gyeongbokgung Palace is arguably the most beautiful, and remains the largest of all five palaces. 
                            The premises were once destroyed by fire during the Imjin War (Japanese Invasions, 1592-1598). 
                            However, all of the palace buildings were later restored under the leadership of Heungseondaewongun during the reign of King Gojong (1852-1919).
                          </p>
                        </div>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm">
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />
              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/culture/Gwanghwamun.jpg")}
                          />
                          <p className="image-thumb">Photo by Visit Seoul</p>
                        </a>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="info">
                            Featured
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                          Gwanghwamun Gate
                          </CardTitle>
                          <h6 className="title-uppercase">Address : 161, Sajik-ro, Jongno-gu, Seoul</h6>
                        </a>
                        <div className="card-description">
                          <p>
                          Built in 1395 under the reign of King Taejo, the first king of the Joseon dynasty, 
                          Gwanghwamun Gate is the southern gate of Gyeongbokgung Palace. 
                          </p>
                          <br />
                          <p>
                          It is also the main gate of the palace, 
                          therefore larger and fancier in comparison to the other gates. 
                          Gwanghwamun Gate consists of three arched gates; 
                          the center gate was used by the king, while the other two were used by the crown prince and royal officials. 
                          </p>
                          <br />
                          <p>
                          The tall granite walls of the gate serve as a platform for the wooden gate tower that watches over the city. 
                          The gate has a sign with its name written at the top center of the gate tower. 
                          </p>
                        </div>
                      </CardBody>
                      <Button className="btn-round" color="danger" size="sm">
                        Read more
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </div>
              <hr />
              <br />
              <br />
              <div className="article">
                <Col className="ml-auto mr-auto" md="8">
                  <Card className="card-blog card-plain text-center">
                    <div className="card-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised"
                          src={require("assets/img/culture/BukchonHanokVillage.jpg")}
                        />
                        <p className="image-thumb">Photo by Visit Seoul</p>
                      </a>
                    </div>
                    <CardBody>
                      <div className="card-category">
                        <Badge className="main-tag" color="info">
                          Featured
                        </Badge>
                      </div>
                      <a href="javascrip: void(0);">
                        <CardTitle tag="h3">
                          BukchonHanokVillage
                        </CardTitle>
                        <h6 className="title-uppercase">Address : 37, Gyedong-gil, Jongno-gu, Seoul</h6>
                      </a>
                      <div className="card-description">
                        <p>
                        Surrounded by Gyeongbokgung Palace, Changdeokgung Palace and Jongmyo Shrine, Bukchon Hanok Village is home to hundreds of traditional houses, called hanok, that date back to the Joseon dynasty. 
                        </p>
                        <br />
                        <p>
                        The name Bukchon, which literally translates to "northern village," came about as the neighborhood lies north of two significant Seoul landmarks, Cheonggyecheon Stream and Jongno. 
                        </p>
                        <br />
                        <p>
                        Today, many of these hanoks operate as cultural centers, guesthouses, restaurants and tea houses, providing visitors with an opportunity to experience, learn and immerse themselves in traditional Korean culture. 
                        As Bukchon Hanok Village is an actual neighborhood with people's homes, visitors are advised to be respectful at all times while looking around.
                        </p>
                      </div>
                    </CardBody>
                    <Button className="btn-round" color="danger" size="sm">
                      Read more
                    </Button>
                  </Card>
                </Col>
              </div>
              <hr />
              <Row>
                <Col md="12">
                  <div className="pull-left">
                    <Button
                      className="btn-link btn-move-left"
                      color="default"
                      size="sm"
                    >
                      <i className="fa fa-angle-left mr-1" />
                      Older Posts
                    </Button>
                  </div>
                  <div className="pull-right">
                    <Button
                      className="btn-link btn-move-right"
                      color="default"
                      size="sm"
                    >
                      Newer Posts <i className="fa fa-angle-right" />
                    </Button>
                  </div>
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

export default BlogPosts;
