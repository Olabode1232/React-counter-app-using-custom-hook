import React, { Component } from "react";
import ForwardCounter from "./component/forwardCounter";
import BackwardCounter from "./component/backwardCounter";
import "./App.css";

const App = () => {
  return (
    <div style={{ backgroundColor: "gray" }}>
      <ForwardCounter />
      <BackwardCounter/>
    </div>
  );
};

export default App;
