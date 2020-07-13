import React from "react";

// reactstrap components
import { Button } from "reactstrap";

// core components

function BlogPostHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header"
        ref={pageHeader}
        style={{
          backgroundImage:
            "url(" + require("assets/img/sections/suwoncastle.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <div className="motto">
            <h2 className="title-uppercase text-center">The world is a book </h2>
            <h2 className="title-uppercase text-center">and those who do not travel read only one page</h2>
            <h3 className="text-center">- St. Augustine -</h3>
            <br />
            <br />
            <br />
            <Button
              className="btn-round"
              color="warning"
              href="#pablo"
              onClick={e => e.preventDefault()}
              size="lg"
            >
              {/* <i className="fa fa-share-alt mr-1 " /> */}
              Scroll Down
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPostHeader;
