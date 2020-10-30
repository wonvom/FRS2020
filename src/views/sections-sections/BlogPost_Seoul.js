import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap"; // Button, Media 삭제

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import BlogPostHeader from "components/Headers/BlogPostHeader.js";
import FooterGray from "components/Footers/FooterGray.js";

function BlogPost() {

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
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };


  document.documentElement.classList.remove("nav-open");

  React.useEffect(()=>{
    //setLocation(localStorage.getItem('location'));



    fetch(`http://172.31.17.50:8080/tour/list/address?location=Seoul`, {
        method: "GET",
        headers: {
          Authorization : null
        },
        }

    ).then(res => res.json()).then(res => {
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


      //console.log(res);




    })
  },[])



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
                      <div className="name">
                        <h4 className="title text-center">
                          {tourname} <br />
                          <p></p>
                          <p><small>{address}</small></p>
                        </h4>
                      </div>
                    </a>
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

                    <blockquote className="blockquote">
                    <br />
                    <p>
                    {summery}
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
                    <div className="name">
                      <h4 className="title text-center">
                        {tourname1} <br />
                        <p></p>
                        <p><small>{address1}</small></p>
                      </h4>
                    </div>
                  </a>
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


                    <blockquote className="blockquote">
                    <br />
                    <p>
                    {summery1}
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
                    <div className="name">
                      <h4 className="title text-center">
                        {tourname2} <br />
                        <p></p>
                        <p><small>{address2}</small></p>
                      </h4>
                    </div>
                  </a>
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

                    <blockquote className="blockquote">
                    <br />
                    <p>
                    {summery2}
                    </p>
                    <br />
                    </blockquote>

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
