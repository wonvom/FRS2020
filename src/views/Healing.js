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
import HealingHeader from "components/Headers/HealingHeader.js";
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
      <HealingHeader />
      <div className="wrapper">
        <div className="main">
          <div className="section section-white">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center title" md="6">
                  <h2>Korean Resorts</h2>
                  <h3 className="title-uppercase">
                    <small>The Top3 Korean Resotrs</small>
                  </h3>
                </Col>
              </Row>
              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-center">
                      <div className="card-image">
                        <a href="www.junggu.seoul.kr" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/healing/SpecialTouristZone.jpg")}
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
                            Myeong-dong, Namdaemun, Bukchang-dong, Da-dong and Mugyo-dong Special Tourist Zone
                          </CardTitle>
                        </a>
                        <h6 className="title-uppercase">Address : 40, Sejong-daero, Jung-gu, Seoul  </h6>
                        <div className="card-description">
                          <p>
                          Myeong-dong, Namdaemun, Bukchang-dong and Da-dong are widely known among international visitors as hot spots for shopping and food. 
                          </p>
                          <br />
                          <p>
                              Myeong-dong is a popular destination for shopping, culture, arts and fashion. Major shopping malls such as Lotte Department Store, Shinsegae Department Store, Myeong-dong Migliore and Samik Fashion Town are located here. 
                              Shoppers can find a variety of products here from high-end items to relatively inexpensive clothes. There’s also no shortage of street food, traditional restaurants, coffee shops and fancy cafes. 
                          </p>
                          <br />
                          <p>
                              Namdaemun Market is the biggest traditional market in Korea. Visitors can purchase souvenirs and local produce at an affordable price in the shopping complex crowded with stores and street stalls. 
                              The market sells a variety of clothes, kitchenware, toys, accessories, food, flowers and imported goods. 
                          </p>
                          <br />
                          <p>
                              Bukchang-dong and Sogong-dong have high-end accommodations including Lotte Hotel Seoul and Westin Chosun Seoul, duty-free shops, and restaurants serving traditional dishes. .
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
                        <a href="parks.seoul.go.kr " onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/healing/TapgolPark.jpg")}
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
                            Tapgol Park
                          </CardTitle>
                          <h6 className="title-uppercase">address : 99, Jong-ro, Jongno-gu, Seoul </h6>
                        </a>
                        <div className="card-description">
                          <p>
                          Tapgol Park is the first modern park to be built in Seoul, and it was originally built as a temple site to house Wongaksa Temple during the 13th year of the Joseon Dynasty.
                          </p>
                          <br />
                          <p>
                          However, the temple was destroyed under the reign of Yeonsangun and remained closed until 1897, when the provincial advisor, Englishman named John Mcleavy Brown, made a proposal to renovate the site into a park. 
                          </p>
                          <br />
                          <p>
                          The park contains several national treasures, including Wongaksaji Sipcheungseoktap Pagoda (Ten-story Stone Pagoda of Wongaksa Temple Site) and Wongaksabi Stele, and Palgakjeong Pavilion, where the Independence Proclamation was first declared; the independence movement relief plate; and the statue of Son Byeong-hee. 
                          </p>
                          <br />
                          <p>
                          The park is of great historical value and national spirit as it was the starting point of the March 1 Independence Movement.
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
                      <a href="www.namisum.com " onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised"
                          src={require("assets/img/healing/NamiseomIsland.jpg")}
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
                          Namiseom Island
                        </CardTitle>
                        <h6 className="title-uppercase">address : 1, Namiseom-gil, Chuncheon-si, Gangwon-do</h6>
                      </a>
                      <div className="card-description">
                      <p>
                      It is a half moon-shaped isle, and on it is the grave of General Nami, who led a 
                      great victory against the rebels in the 13th year of the 7th king of the Joseon 
                      dynasty, King Sejo (r. 1455-1468).
                      </p>
                      <br />
                      <p>
                      Namiseom Island is 63 kilometers away from Seoul in the direction of Chuncheon, and is 
                      famous for its beautiful tree lined roads. The island is 30 minutes away from Chuncheon 
                      and an hour away from the suburbs of Seoul. Since it is not far from Seoul, many couples 
                      and families come to visit.
                      </p>
                      <br />
                      <p>
                      A special feature of Namiseom Island is that there are no telephone poles. This is because 
                      all electric wires were built underground to keep the natural feeling of the landscape. 
                      The island is 553,560 square yards with chestnut trees and poplar trees throughout.
                      </p>
                      <br />
                      <p>
                      In the middle of the isle, there is a grass field about 316,320 square yards. It features 
                      education and training facilities and camping sites. The island also has a swimming pool 
                      and water sports facilities for motorboats and water-skiing, as well as a theme park with 
                      a merry-go-round, shooting range, and roller skating rink. Lodging facilities such as resort 
                      villas and bungalows are available for visitors to stay on the island.   
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
              
            </Container>
          </div>
        </div>
      </div>
      <FooterGray />
    </>
  );
}

export default BlogPosts;
