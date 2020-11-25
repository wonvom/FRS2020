import React from "react";
import {withRouter} from "react-router-dom";
import {isEmpty} from "lodash/isEmpty";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap"; // Button, Media 삭제

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import BlogPostHeader from "components/Headers/BlogPostHeader.js";
import FooterGray from "components/Footers/FooterGray.js";

function BlogPost({history}) {

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
  const [path, setPath] = React.useState('');
  const [data, setData] = React.useState(null);


  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };


  document.documentElement.classList.remove("nav-open");



  React.useEffect(()=>{
    const {location} = history;
    setPath(location.pathname);
  },[]);

  React.useEffect(()=>{
    setData(JSON.parse(localStorage.getItem('data')));
  },[path]);


   



  React.useEffect(() => {


    document.body.classList.add("blog-post");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-post");
    };
  });

    console.log(data)

    if(data === null) return null;
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
                          {data._embedded.tupleBackedMapList[0].tourName}<br />
                          <p>{data._embedded.tupleBackedMapList[0].address}</p>
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
                      <p><small>{data._embedded.tupleBackedMapList[0].summery}</small></p>
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
                          {data._embedded.tupleBackedMapList[1].tourName} <br />
                          <p>{data._embedded.tupleBackedMapList[0].address}</p>
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
                        {data._embedded.tupleBackedMapList[1].summery}
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
                          {data._embedded.tupleBackedMapList[2].tourName} <br />
                          <p>{data._embedded.tupleBackedMapList[2].address}</p>
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
                        {data._embedded.tupleBackedMapList[2].summery}
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

export default withRouter(BlogPost);
