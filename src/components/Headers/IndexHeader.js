import React from "react";

// reactstrap components

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/sections/han-ook.jpg") + ")"
        }}
      >
        {/* <div className="filter" /> */}
        <div className="content-center">
          {/* <div className="motto">
          </div> */}
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
