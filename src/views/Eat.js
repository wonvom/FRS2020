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
import EatHeader from "components/Headers/EatHeader.js";
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
      <EatHeader />
      <div className="wrapper">
        <div className="main">
          <div className="section section-white">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center title" md="6">
                  <h2>Korean Cuisine</h2>
                  <h3 className="title-uppercase">
                    <small>The Top3 Korean Cuisine</small>
                  </h3>
                </Col>
              </Row>
              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="http://tosokchon.com" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/eat/TosokchonSamgyetang.jpg")}
                          />
                        </a>
                        <p className="image-thumb">Photo by Menupan.com</p>
                      </div>
                      <CardBody>
                        <div className="card-category">
                          <Badge className="main-tag" color="primary">
                            Featured
                          </Badge>
                        </div>
                        <a href="javascrip: void(0);">
                          <CardTitle tag="h3">
                            Tosokchon Samgyetang
                          </CardTitle>
                        </a>
                        <h6 className="title-uppercase">Address : 5, Jahamun-ro 5-gil, Jongno-gu, Seoul</h6>
                        <div className="card-description">
                          <p>
                            Located near Gyeongbokgung Station, the restaurant was also frequented by late President Roh Moo-hyun.
                          </p>
                          <br />
                          <p>
                            It produces their ingredients like Tojongdak (Korean chicken), 4-years ginseng, chest nut, jujube, garlics, ginger, adlay, perilla seeds, pumpkin seeds, sunflower seed, nuts, pine nut, black sesame, and etc.
                          </p>
                          <br />
                          <p>
                            Even though one has to wait to enter during lunch time, do not worry about long wait as the restaurant is spacious.
                            Besides Samgyetang (ginseng chicken soup), it serves Ogol-samgyetang, otdak, pajeon (green onion pancake), Rotisserie chicken, and other menus.
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
                            src={require("assets/img/eat/MyeongdongKyoja.jpg")}
                          />
                          <p className="image-thumb">Photo by Siksin.com</p>
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
                            Myeongdong Kyoja
                          </CardTitle>
                          <h6 className="title-uppercase">Address : 29, Myeongdong 10-gil, Jung-gu, Seoul (Myeong-dong 2-ga)</h6>
                        </a>
                        <div className="card-description">
                          <p>
                            Myeongdong Kyoja is a noodle restaurant located near Myeongdong Cathedral that has been in business for about 40 years. 
                          </p>
                          <br />
                          <p>
                            The restaurant is known for their knife-cut, handmade kalguksu (noodle soup) which is its main menu item. 
                          </p>
                          <br />
                          <p>
                            These lovingly prepared noodles are served in a deep and flavorful broth with meat and vegetables, making for a delicious meal. 
                            Also popular are the mandu (dumplings), bibim guksu (spicy noodles), and kongguksu (noodles in cold soybean soup). 
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
                      <a href="https://hellosunshineseoul.wordpress.com/2016/01/06/back-in-seoul-passion-5-itaewon/" 
                      onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised"
                          src={require("assets/img/eat/Passion5.jpeg")}
                        />
                        <p className="image-thumb">Photo by Hello Sunshine</p>
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
                          Passion 5 
                        </CardTitle>
                        <h6 className="title-uppercase">Address : 272, Itaewon-ro, Yongsan-gu, Seoul</h6>
                      </a>
                      <div className="card-description">
                        <p>
                          Passion 5 is located near Hangangjin Station in Hannam-dong and is a premium dessert café and gallery launched by SPC Group. 
                        </p>
                        <br />
                        <p>
                          The Passion 5 bakery brings a whole new culture of after-dining, providing customers with a diverse selection of delicious desserts including hand-made chocolates and puddings. 
                          Visitors can enjoy their treats in a gallery atmosphere. 
                        </p>
                        <br />
                        <p>
                        The name Passion 5 comes from the combining of five elements: the bakery, patisserie, chocolates and café. 
                        The final element is the passion of those who create the desserts. 
                        </p>
                        <br />
                        <p>
                        The desserts are exquisitely designed and each element has its own unique atmosphere. 
                        In addition to the wonderful items from the bakery, there are usually 300 to 400 dessert items to choose from including cakes, puddings and chocolates.
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
