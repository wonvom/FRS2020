import React from "react";
// react plugin used to create google maps
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker
// } from "react-google-maps";
// reactstrap components
import { Button, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import InfoNavbar from "components/Navbars/InfoNavbar.js";
import FooterWhite from "components/Footers/FooterBlack.js";

// const MapWrapper = withScriptjs(
//   withGoogleMap(props => (
//     <GoogleMap
//       defaultZoom={14}
//       defaultCenter={{ lat: 37.321128, lng: 127.128350 }}
//       defaultOptions={{
//         styles: [
//           {
//             featureType: "water",
//             elementType: "geometry",
//             stylers: [
//               {
//                 color: "#e9e9e9"
//               },
//               {
//                 lightness: 17
//               }
//             ]
//           },
//           {
//             featureType: "landscape",
//             elementType: "geometry",
//             stylers: [
//               {
//                 color: "#f5f5f5"
//               },
//               {
//                 lightness: 20
//               }
//             ]
//           },
//           {
//             featureType: "road.highway",
//             elementType: "geometry.fill",
//             stylers: [
//               {
//                 color: "#ffffff"
//               },
//               {
//                 lightness: 17
//               }
//             ]
//           },
//           {
//             featureType: "road.highway",
//             elementType: "geometry.stroke",
//             stylers: [
//               {
//                 color: "#ffffff"
//               },
//               {
//                 lightness: 29
//               },
//               {
//                 weight: 0.2
//               }
//             ]
//           },
//           {
//             featureType: "road.arterial",
//             elementType: "geometry",
//             stylers: [
//               {
//                 color: "#ffffff"
//               },
//               {
//                 lightness: 18
//               }
//             ]
//           },
//           {
//             featureType: "road.local",
//             elementType: "geometry",
//             stylers: [
//               {
//                 color: "#ffffff"
//               },
//               {
//                 lightness: 16
//               }
//             ]
//           },
//           {
//             featureType: "poi",
//             elementType: "geometry",
//             stylers: [
//               {
//                 color: "#f5f5f5"
//               },
//               {
//                 lightness: 21
//               }
//             ]
//           },
//           {
//             featureType: "poi.park",
//             elementType: "geometry",
//             stylers: [
//               {
//                 color: "#dedede"
//               },
//               {
//                 lightness: 21
//               }
//             ]
//           },
//           {
//             elementType: "labels.text.stroke",
//             stylers: [
//               {
//                 visibility: "on"
//               },
//               {
//                 color: "#ffffff"
//               },
//               {
//                 lightness: 16
//               }
//             ]
//           },
//           {
//             elementType: "labels.text.fill",
//             stylers: [
//               {
//                 saturation: 36
//               },
//               {
//                 color: "#333333"
//               },
//               {
//                 lightness: 40
//               }
//             ]
//           },
//           {
//             elementType: "labels.icon",
//             stylers: [
//               {
//                 visibility: "off"
//               }
//             ]
//           },
//           {
//             featureType: "transit",
//             elementType: "geometry",
//             stylers: [
//               {
//                 color: "#f2f2f2"
//               },
//               {
//                 lightness: 19
//               }
//             ]
//           },
//           {
//             featureType: "administrative",
//             elementType: "geometry.fill",
//             stylers: [
//               {
//                 color: "#fefefe"
//               },
//               {
//                 lightness: 20
//               }
//             ]
//           },
//           {
//             featureType: "administrative",
//             elementType: "geometry.stroke",
//             stylers: [
//               {
//                 color: "#fefefe"
//               },
//               {
//                 lightness: 17
//               },
//               {
//                 weight: 1.2
//               }
//             ]
//           }
//         ],
//         scrollwheel: false //we disable de scroll over the map, it is a really annoing when you scroll through page
//       }}
//     >
//       <Marker position={{ lat: 37.321128, lng: 127.128350 }} />
//     </GoogleMap>
//   ))
// );

function ContactUs() {
  document.documentElement.classList.remove("nav-open");
  
  React.useEffect(() => {
    document.body.classList.add("contact-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("contact-page");
    };
  });
  return (
    <>
      <InfoNavbar />
      <div className="main">
        <div className="section section-gray">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Get in touch with us</h2>
                <p>
                Do you need any help? We will kindly help you.
                </p>
              </Col>
            </Row>
            
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h3 className="title">
                  <small>drop us a note</small>
                </h3>
                <Form className="contact">
                  <Row>
                    <Col md="6">
                      <Input placeholder="First Name" type="text" />
                    </Col>
                    <Col md="6">
                      <Input placeholder="Last Name" type="text" />
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <Input placeholder="Email" type="text" />
                    </Col>
                    <Col md="6">
                      <Input placeholder="Subject" type="text" />
                    </Col>
                  </Row>
                  <Input placeholder="Message" rows="7" type="textarea" />
                  <Row>
                    <Col className="ml-auto mr-auto" md="6">
                      <Button block className="btn-round" color="primary">
                        Send
                      </Button>
                    </Col>
                  </Row>
                </Form>
                <h3 className="visit">
                  <small>Or come and visit here</small>
                </h3>
                <h3 className="visit">
                  <small>152, Jukjeon-ro, Suji-gu, Yongin-si, Gyeonggi-do, Republic of Korea</small>
                </h3>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* <div className="big-map" id="contactUsMap">
        <MapWrapper
          //googleMapURL="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyBfosBbi1njLv8yqZbJkWX2w8yJxP4Yr3E"
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfosBbi1njLv8yqZbJkWX2w8yJxP4Yr3E"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div> */}
      <FooterWhite />
    </>
  );
}

export default ContactUs;
