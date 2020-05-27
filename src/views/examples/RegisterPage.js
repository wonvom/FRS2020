import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Container,
  Label,
  Row,
  Col
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";

function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    document.body.classList.add("full-screen");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("register-page");
      document.body.classList.remove("full-screen");
    };
  });
  return (
    <>
      <ColorNavbar />
      <div className="wrapper">
        <div
          className="page-header"
          style={{
            backgroundImage:
              "url(" + require("assets/img/sections/goseong_beach.jpg") + ")"
          }}
        >
          <div className="filter" />
          <Container>
            <Row>
              <Col className="ml-auto" lg="6" md="6" sm="7" xs="12">
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="fa fa-child" />
                  </div>
                  <div className="description">
                    <h3>How old are you? Or What age group do you want to know about?</h3>
                    <p>
                    <FormGroup check>
                        <p>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />10s
                            <span className="form-check-sign" />
                          </Label>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />20s
                            <span className="form-check-sign" />
                          </Label>
                        </p>
                        <p>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />30s
                            <span className="form-check-sign" />
                          </Label>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />40s
                            <span className="form-check-sign" />
                          </Label>
                        </p>
                      </FormGroup>
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="fa fa-thumbs-o-up" />
                  </div>
                  <div className="description">
                    <h3>Where are you from?</h3>
                    <p>
                      Please check your nationality.
                    </p>
                    <p>
                    <FormGroup check>
                        <p>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />Korea
                            <span className="form-check-sign" />
                          </Label>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />Sports
                            <span className="form-check-sign" />
                          </Label>
                        </p>
                        <p>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />Eat
                            <span className="form-check-sign" />
                          </Label>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />Healing
                            <span className="form-check-sign" />
                          </Label>
                        </p>
                      </FormGroup>
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="fa fa-heart" />
                  </div>
                  <div className="description">
                    <h3>Female or Male?</h3>
                    <p>
                    <FormGroup check>
                        <p>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />Female
                            <span className="form-check-sign" />
                          </Label>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />Male
                            <span className="form-check-sign" />
                          </Label>
                        </p>
                      </FormGroup>
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="mr-auto" lg="6" md="6" sm="5" xs="12">
                <Card className="card-register">
                  <CardTitle className="text-center" tag="h3">
                    Register
                  </CardTitle>
                  {/* <div className="social">
                    <Button className="btn-just-icon mr-1" color="facebook">
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button className="btn-just-icon mr-1" color="google">
                      <i className="fa fa-google" />
                    </Button>
                    <Button className="btn-just-icon" color="twitter">
                      <i className="fa fa-twitter" />
                    </Button>
                  </div> */}
                  <div className="division">
                    <div className="line l" />
                    <span>or</span>
                    <div className="line r" />
                  </div>
                  <Form className="register-form">
                    <Input placeholder="Email" type="text" />
                    <Input placeholder="Password" type="password" />
                    <Input placeholder="Confirm Password" type="password" />
                    <Button block className="btn-round" color="default">
                      Register
                    </Button>
                  </Form>
                  <div className="login">
                    <p>
                      Already have an account?{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Log in
                      </a>
                      .
                    </p>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
          <div className="demo-footer text-center">
            <h6>
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by FRS team
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
