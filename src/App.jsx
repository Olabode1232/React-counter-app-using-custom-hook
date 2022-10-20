import React, { Component } from "react";
import ForwardCounter from "./component/forwardCounter";
import BackwardCounter from "./component/backwardCounter";
import "./App.css";

const App = () => {
  return (
    <div style={{ backgroundColor: "gray" }}>
      <div className="text-center fs-3 text-light fw-1">COUNTER APP USING REACT CUSTOM HOOK</div>
      <ForwardCounter />
      <BackwardCounter/>
    </div>
  );
};

export default App;
