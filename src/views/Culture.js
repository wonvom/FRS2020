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
  const [ss, setSs] = React.useState('');
  const [activeTab, setActiveTab] = React.useState("1");
  const [tourname, setTourname] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [summery, setSummery] = React.useState('');
  const [tourname1, setTourname1] = React.useState('');
  const [address1, setAddress1] = React.useState('');
  const [summery1, setSummery1] = React.useState('');
  const [tourname2, setTourname2] = React.useState('');
  const [address2, setAddress2] = React.useState('');
  const [summery2, setSummery2] = React.useState('');

  const toggle = tab => {
    if (activeTab !== tab){
      setActiveTab(tab);
    }
  }

  document.documentElement.classList.remove("nav-open");

  React.useEffect(()=>{

    fetch('http://172.31.17.50:8080/', {
      method: "GET",
      headers: {
        Authorization: null
      },
    }
    ).then(res => res.json()).then(res =>{
      setSs(res);

      setTourname(res._embedded.tupleBackedMapList[0].tourName);
      setAddress(res._embedded.tupleBackedMapList[0].address);
      setSummery(res._embedded.tupleBackedMapList[0].summery);

      setTourname1(res._embedded.tupleBackedMapList[1].tourName);
      setAddress1(res._embedded.tupleBackedMapList[1].address);
      setSummery1(res._embedded.tupleBackedMapList[1].summery);

      setTourname2(res._embedded.tupleBackedMapList[2].tourName);
      setAddress2(res._embedded.tupleBackedMapList[2].address);
      setSummery2(res._embedded.tupleBackedMapList[2].summery);
    })
  }, []);

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
                        <a href="http://www.royalpalace.go.kr/">
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
                          <div className="name">
                            <h4 className="title text-center">
                              {tourname} <br/>
                              <p></p>
                              <p><small>{address}</small></p>
                            </h4>
                          </div>
                        </a>
                        {summery}
                        {/*<h6 className="title-uppercase">Address : 161, Sajik-ro, Jongno-gu, Seoul </h6>
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
                        </div> */}
                        <p></p>
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
                        <a href="http://www.royalpalace.go.kr/">
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
                          <div className="name">
                            <h4 className="title text-center">
                              {tourname1}
                              <p></p>
                              <p><small>{address1}</small></p>
                            </h4>
                          </div>
                          {/* <CardTitle tag="h3">
                          Gwanghwamun Gate
                          </CardTitle> */}
                          {/* <h6 className="title-uppercase">Address : 161, Sajik-ro, Jongno-gu, Seoul</h6> */}
                        </a>
                        {summery1}
                        <p></p>
                        {/* <div className="card-description">
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
                        </div> */}
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
                      <a href="http://hanok.seoul.go.kr/front/index.do">
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
                        <div className="name">
                          <h4 className="title text-center">
                            {tourname2}
                            <p></p>
                            <p><small>{address2}</small></p>
                          </h4>
                        </div>
                        {/* <CardTitle tag="h3">
                          BukchonHanokVillage
                        </CardTitle> */}
                        {/* <h6 className="title-uppercase">Address : 37, Gyedong-gil, Jongno-gu, Seoul</h6> */}
                      </a>
                      {summery2}
                      <p></p>
                      {/* <div className="card-description">
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
                      </div> */}
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
