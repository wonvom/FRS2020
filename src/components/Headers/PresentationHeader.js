/*eslint-disable*/
import React from "react";
import {withRouter} from 'react-router-dom'
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

function PresentationHeader({history}) {
  const [value, setValue] = React.useState('');
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("search-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("search-page");
    };
  });
  
  const goLink = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // theme
      if(['문화','culture'].includes(value)) history.push('/Culture');
      else if(['운동','스포츠','sport','sports'].includes(value)) history.push('/Sports');
      else if(['eat','eats','음식','맛집','먹는 것'].includes(value)) history.push('/Eat');
      else if(['힐링','안식','쉼터','healing'].includes(value)) history.push('/Healing');
      // location
      else if(['서울', '명동', '홍대', '남대문시장', 'Seoul', 'Myeongdong', 'Hongdae', 'Hongik', 'Hongik university street', 'Namdaemun market'].includes(value)) history.push('/blog-post-seoul');
      else if(['부산', 'Busan', '남포동', '국제시장', '남포동', '국제시장', 'Gukje', 'Gukje Market', '해운대', "해운대해수욕장", 'Haeundae','Haeundae beach', '광복로문화패션거리', '광복로', 'Gwangbok-dong street'].includes(value)) history.push('/blog-post-busan');
      else if(["대구", 'Daegu', '대구 근대골목', 'Daegu modern history street', '국채보상운동기념공원', 'Gukchaebosang Memorial park', '대구 서문시장', '서문시장 야시장', 'Daegu Seomun market', 'seomun night market'].includes(value)) history.push('/blog-post-daegu');
      else if(['대전', 'Daejeon', '대전엑스포과학공원', 'Expo park', '대전근현대사전시관', '충남도청사 본관', 'Daejeon modern history exhibition hall', '한밭수목원', 'Hanbat arboretum'].includes(value)) history.push('/blog-post-deajeon');
      else if(['강원도', '강원', 'Gangwon', '남이섬', 'Namiseom', 'Namiseom island', '백룡동굴 강원고생대 국가지질공원', '백룡동굴', '강원고생대 국가지질공원', 'Baengnyongdonggul', 'Baengnyongdonggul cave', 'Baengnyongdonggul Gangwon paleozoic geopark', 'Gangwon paleozoic geopark', '강촌 레일파크', 'Gangchon rail park'].includes(value)) history.push('/blog-post-gangwon');
      else if(['전주', 'Jeonju', '전주한옥마을', 'Jeonju hanok village', '슬로시티', 'Slow city', '내장산국립공원', '내장산', 'Naejangsan', 'Naejangsan national park', '자만벽화마을', 'Jaman mural village'].includes(value)) history.push('/blog-post-jeonju');
      else if(['인천', 'Incheon', '용유도', 'Yongyudo island', '월미 관광특구', 'Wolmi special tourist zone', '인천 차이나타운', 'Incheon chinatown'].includes(value)) history.push('/blog-post-incheon');
      else if(['울산', 'Ulsan', '대왕암공원', 'Daewangam park', '장생포 고래문화마을', '장생포', 'Jangsaengpo', 'Jangsaengpo whale culture village', '태화강 국가정원', 'Taehwagang national garden'].includes(value)) history.push('/blog-post-ulsan');
      else if(['제주도', '제주','Jeju', '한라산', 'Hallasan', 'Hallasan National park', '제주도 국가지질공원', 'Jeju national geopark', '성산일출봉', 'Seongsan ilchulbong', 'Seongsan ilchulbong tuff cone', '산지천', 'Sanjicheon', 'Sanjicheon stream'].includes(value)) history.push('/blog-post-jeju');
    }
  }
  return (
    <>
      <div className="wrapper">
        <div
          className="page-header section-dark"
          style={{
            backgroundImage:
              // "url(" + require("assets/img/sections/pk-pro-cover.jpg") + ")"
              "url(" + require("assets/img/sections/han-ook.jpg") + ")"
              // <img src = "/assets/img/sections/han-ook.jpg">
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
                  <Form className="form-inline search-form" role="search" action="/blog-post-seoul" method="get">
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
                        onChange={(e)=>{setValue((e.target.value).toLowerCase())}}
                        onKeyPress={e => {goLink(e)}}
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

export default withRouter(PresentationHeader);
