import React from "react";
import Select from "react-select";
import {withRouter} from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardTitle,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
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

const selectOptions = [
  { value: "", label: " Choose city", isDisabled: true },
  { value: "1", label: "Paris " },
  { value: "2", label: "Bucharest" },
  { value: "3", label: "Rome" },
  { value: "4", label: "New York" },
  { value: "5", label: "Miami " },
  { value: "6", label: "Piatra Neamt" },
  { value: "7", label: "Paris " },
  { value: "8", label: "Bucharest" },
  { value: "9", label: "Rome" },
  { value: "10", label: "New York" },
  { value: "11", label: "Miami " }
];

function RegisterPage({history}) {
  const [defaultSelect, setDefaultSelect] = React.useState(null);
  const [age, setAge] = React.useState(0);
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('');
  const [nation, setNation] = React.useState('');
  const [sex, setSex] = React.useState('');
  const [password,setPassword] = React.useState('');

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
                          <Label check >
                            <Input defaultValue="" type="checkbox" value='10' onClick={(e)=>{setAge(e.target.value)}}/>10s
                            <span className="form-check-sign" />
                          </Label>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <Label check>
                            <Input defaultValue="" type="checkbox" value='20' onClick={(e)=>{setAge(e.target.value)}}/>20s
                            <span className="form-check-sign" />
                          </Label>
                        </p>
                        <p>
                          <Label check>
                            <Input defaultValue="" type="checkbox" value='30' onClick={(e)=>{setAge(e.target.value)}} />30s
                            <span className="form-check-sign" />
                          </Label>
                          &nbsp;&nbsp;&nbsp;
                          <Label check>
                            <Input defaultValue="" type="checkbox" value='40' onClick={(e)=>{setAge(e.target.value)}} />40s
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
                            <Input defaultValue="" type="checkbox" value='kr' onClick={(e)=>{setNation(e.target.value)}}/>Korea
                            <span className="form-check-sign" />
                          </Label>
                          &nbsp;&nbsp;&nbsp;
                          <Label check>
                            <Input defaultValue="" type="checkbox" value='china' onClick={(e)=>{setNation(e.target.value)}}/>China
                            <span className="form-check-sign" />
                          </Label>
                        </p>
                        <p>
                          <Label check>
                            <Input defaultValue="" type="checkbox" value='USA' onClick={(e)=>{setNation(e.target.value)}}/>USA
                            <span className="form-check-sign" />
                          </Label>
                          &nbsp;&nbsp;&nbsp;
                          <Label check>
                            <Input defaultValue="" type="checkbox" value='UK' onClick={(e)=>{setNation(e.target.value)}}/>England
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
                            <Input defaultValue="" type="checkbox" value='women' onClick={(e)=>{setSex(e.target.value)}}/>Female
                            <span className="form-check-sign" />
                          </Label>
                          &nbsp;&nbsp;&nbsp;
                          <Label check>
                            <Input defaultValue="" type="checkbox" value='men' onClick={(e)=>{setSex(e.target.value)}}/>Male
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
                    <Input placeholder="Name" type="text" onChange={(e)=>{setName(e.target.value)}}/>
                    <Input placeholder="Email" type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
                    <Input placeholder="Password" type="password" />
                    <Input placeholder="Confirm Password" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                    <Button block className="btn-round" color="default" onClick={()=>{
                      if(email === '') alert("이메일을 입력해주세요");
                      else if(password === '') alert("패스워드를 입력해주세요");
                      else if(age === '') alert("나이를 선택해주세요");
                      else if(name === '') alert("이름을 입력해주세요");
                      else if(nation === '') alert("국적을 선택 해주세요");
                      else if(sex === '') alert("성별을 선택 해주세요");
                      else {
                    
                      fetch("http://172.31.36.93:8080/join", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                          email: email,
                          password: password,
                          age:parseInt(age),
                          name:name,
                          nationality:nation,
                          gender:sex
                        })
                      }
                      ).then(res => {if(res.status === 400){
                        alert('패스워드는 숫자, 문자, 특수문자 각각 1개 이상, 8자리 이상 입력해주세요');
                      }else if(res.status === 409){
                        alert('이메일이 중복입니다 다른 이메일을 입력해 주세요');

                      }
                    
                      else {
                        localStorage.setItem('age',parseInt(age));
                        localStorage.setItem('email',email);
                        localStorage.setItem('password',password);
                        localStorage.setItem('nationality',nation);
                        localStorage.setItem('sex',sex);
                        localStorage.setItem('age',parseInt(age));
                        alert('축하합니다! 회원가입이 완료 됐습니다.');
                        history.push('/presentation');
                      }})
                    }}}>
                      Register
                    </Button>
                  </Form>
                  <div className="login">
                    <p>
                      Already have an account?{" "}
                      <a href="/login-page">
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

export default withRouter(RegisterPage);
