import React from "react";

// reactstrap components
import {
  Button,
  //Label,
  //FormGroup,
  //Input,
  //NavItem,
  //NavLink,
  //Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import FooterWhite from "components/Footers/FooterWhite.js";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");
  const [usermail, setusermail] = React.useState('');
  const [age, setAge] = React.useState(0);
  const [name, setName] = React.useState('');
  const [nation, setNation] = React.useState('');
  const [sex, setSex] = React.useState('');
  const [token, setToken] = React.useState('');
  const [email, setEmail] = React.useState('');

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(async()=>{
    setToken(localStorage.getItem('token'));
    setEmail(localStorage.getItem('email'));

    fetch(`http://172.31.36.93:8080/users/${localStorage.getItem('email')}`, {
        method: "GET",
        headers: {
          Authorization : localStorage.getItem('token')
        }
      }
    ).then(res => res.json()).then(res => {
      setName(res.name);
      setAge(res.age);
      setNation(res.nationality);
      setusermail(res.email);
      setSex(res.gender);
    })
  },[])

  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ColorNavbar />
      <ProfilePageHeader />
      <div className="wrapper">
        <div className="profile-content section">
          <Container>
            <Row>
              <div className="profile-picture">
                <div
                  className="fileinput fileinput-new"
                  data-provides="fileinput"
                >
                  <div className="fileinput-new img-no-padding">
                    <img
                      alt="..."
                      src={require("assets/img/faces/defaultimage.jpg")}
                    />
                  </div>
                  <div className="name">
                    <h4 className="title text-center">
                      {name} <br />
                      <p></p>
                      <p><small>{age}</small></p>
                      <p><small>{nation}</small></p>
                      <p><small>{sex}</small></p>
                    </h4>
                  </div>
                </div>
              </div>
            </Row>
            {/* <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h5>"Traveling with alcohol"</h5>
                <br /> */}
                {/* <Button className="btn-round" color="default" outline>
                  <i className="fa fa-cog mr-1" />
                  Settings
                </Button> */}
              {/* </Col>
            </Row> */}
            <br />
            {/* <div className="nav-tabs-navigation">
              <div className="nav-tabs-wrapper">
                <Nav role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={activeTab === "1" ? "active" : ""}
                      onClick={() => {
                        toggle("1");
                      }}
                    >
                      Follows
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === "2" ? "active" : ""}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      Following
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </div> */}
            {/* Tab panes */}
            <TabContent className="following" activeTab={activeTab}>
              <TabPane tabId="1" id="follows">
                <Row>
                  <Col className="ml-auto mr-auto" md="6">
                    <ul className="list-unstyled follows">
                      <li>
                        <Row>
                          <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require("assets/img/sections/myeongdong.jpg")}
                            />
                          </Col>
                          <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                            <h6>
                              Myeong-Dong <br />
                              <small>66, Eulji-ro, Jung-gu, Seoul</small>
                            </h6>
                          </Col>
                          <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                            {/* <FormGroup check>
                              <Label check>
                                <Input
                                  defaultChecked
                                  defaultValue=""
                                  type="checkbox"
                                />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup> */}
                          </Col>
                        </Row>
                      </li>
                      <hr />
                      <li>
                        <Row>
                          <Col className="mx-auto" lg="2" md="4" xs="4">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require("assets/img/sections/gyeongbokpalace.jpg")}
                            />
                          </Col>
                          <Col lg="7" md="4" xs="4">
                            <h6>
                              Gyeongbok Palace<br />
                              <small>161 Gyeongbok Palace, Sajik-ro, Jongno-gu, Seoul</small>
                            </h6>
                          </Col>
                          <Col lg="3" md="4" xs="4">
                            {/* <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup> */}
                          </Col>
                        </Row>
                      </li>
                      <hr />
                      <li>
                        <Row>
                          <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require("assets/img/sections/myeongdong.jpg")}
                            />
                          </Col>
                          <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                            <h6>
                              Myeong-Dong <br />
                              <small>66, Eulji-ro, Jung-gu, Seoul</small>
                            </h6>
                          </Col>
                          <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                            {/* <FormGroup check>
                              <Label check>
                                <Input
                                  defaultChecked
                                  defaultValue=""
                                  type="checkbox"
                                />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup> */}
                          </Col>
                        </Row>
                      </li>
                      <hr />
                      <li>
                        <Row>
                          <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require("assets/img/sections/myeongdong.jpg")}
                            />
                          </Col>
                          <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                            <h6>
                              Myeong-Dong <br />
                              <small>66, Eulji-ro, Jung-gu, Seoul</small>
                            </h6>
                          </Col>
                          <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                            {/* <FormGroup check>
                              <Label check>
                                <Input
                                  defaultChecked
                                  defaultValue=""
                                  type="checkbox"
                                />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup> */}
                          </Col>
                        </Row>
                      </li>
                      <hr />
                      <li>
                        <Row>
                          <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require("assets/img/sections/myeongdong.jpg")}
                            />
                          </Col>
                          <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                            <h6>
                              Myeong-Dong <br />
                              <small>66, Eulji-ro, Jung-gu, Seoul</small>
                            </h6>
                          </Col>
                          <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                            {/* <FormGroup check>
                              <Label check>
                                <Input
                                  defaultChecked
                                  defaultValue=""
                                  type="checkbox"
                                />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup> */}
                          </Col>
                        </Row>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </TabPane>
              <TabPane className="text-center" tabId="2" id="following">
                <h3 className="text-muted">Not following anyone yet :(</h3>
                <Button className="btn-round" color="warning">
                  Find artists
                </Button>
              </TabPane>
            </TabContent>
          </Container>
        </div>
      </div>
      <FooterWhite />
    </>
  );
}

export default ProfilePage;
