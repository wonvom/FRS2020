import React from "react";
import {withRouter} from 'react-router-dom'

// reactstrap components
import {
  Button,
  Card,
  CardTitle,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";

function LoginPage({history}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("full-screen");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
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
              "url(" + require("assets/img/sections/2terminal_1.jpg") + ")"
          }}
        >
          <div className="filter" />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="4" md="6" sm="6">
                <Card className="card-register">
                  <CardTitle tag="h3">Welcome</CardTitle>
                  <Form className="register-form">
                    <label>Email</label>
                    <Input
                      className="no-border"
                      placeholder="Email"
                      type="email"
                      onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <label>Password</label>
                    <Input
                      className="no-border"
                      placeholder="Password"
                      type="password"
                      onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <Button block className="btn-round" color="danger" onClick={()=>{
                      fetch("http://172.31.17.50:8080/login", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json"
                          },
                          body: JSON.stringify({
                            email: email,
                            password: password,
                          })
                        }
                      ).then(res=>res.json()).then(res => {
                        localStorage.setItem('email', email)
                        localStorage.setItem('password', password)

                        localStorage.setItem('token',res.Authorization)
                      history.push('/')})
                    }}>
                      Login
                    </Button>
                  </Form>
                  <div className="forgot">
                    <Button
                      className="btn-link"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Forgot password?
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>
            <div className="demo-footer text-center">
              <h6>
                © {new Date().getFullYear()}, made with{" "}
                <i className="fa fa-heart heart" /> by FRS team
              </h6>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default withRouter(LoginPage);
