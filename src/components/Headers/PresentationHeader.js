/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// reactstrap components
// import { Container } from "reactstrap";
// core comments

// core components
import DangerNavbar from "components/Navbars/DangerNavbar.js";
import FooterWhite from "components/Footers/FooterWhite.js";

function PresentationHeader() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("search-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("search-page");
    };
  });
  return (
    <>
      <div className="wrapper">
        <div
          className="page-header section-dark"
          style={{
            backgroundImage:
              // "url(" + require("assets/img/sections/pk-pro-cover.jpg") + ")"
              "url(" + require("/Users/Ethan/EthanPro/src/assets/img/effel_tower.jpg") + ")"
              // <img src = "/assets/img/effel_tower.jpg">
          }}
        >
          <div className="content-center">
            <Container>
              <div className="title-brand">
                <h1 className="presentation-title">Make up your life.</h1>
                {/* <div className="type">PRO</div> */}
                <div className="fog-low">
                  <img
                    alt="..."
                    src={require("assets/img/sections/fog-low.png")}
                  />
                </div>
                <div className="fog-low right">
                  <img
                    alt="..."
                    src={require("assets/img/sections/fog-low.png")}
                  />
                </div>
              </div>
              <h1>

              </h1>
                <Col className="ml-auto mr-auto text-center" md="3" xs="10">
                  <Form className="form-inline search-form" role="search">
                    <InputGroup className="no-border">
                      <span
                        className="input-group-addon addon-xtreme no-border"
                        id="basic-addon1"
                      >
                        <i className="fa fa-search" />
                      </span>
                      <Input
                        aria-describedby="basic-addon1"
                        className="input-xtreme no-border"
                        placeholder="Where to ?"
                        type="text"
                      />
                    </InputGroup>
                  </Form>
                  {/* <h6 className="text-muted">
                    Is this what you are looking for?
                  </h6> */}
                </Col>
              {/* <h2 className="presentation-subtitle text-center">
                열심히해봅시다
              </h2> */}
              
            </Container>
            
          </div>
          {/* <h6 className="category category-absolute">
            Designed and coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=pkpr-presentation-header"
              target="_blank"
            >
              <img
                alt="..."
                className="creative-tim-logo"
                src={require("assets/img/creative-tim-white-slim2.png")}
              />
            </a>
          </h6> */}
        </div>
      </div>
    </>
  );
}

export default PresentationHeader;
