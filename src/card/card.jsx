import React, { Component } from "react";

const Card = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center text-center mt-3 fw-3">
        <div className="col-md-7 bg-light  fs-2  fw-1  rounded-2 ">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Card;
