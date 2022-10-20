import React, { Component, useState, useEffect } from "react";
import Card from "../card/card";

const ForwardCounter = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
          setCount(prevCount => prevCount + 1)
      }, 1000);
      return () => clearInterval(interval)
  }, [])

  return <Card>{count}</Card>;
};

export default ForwardCounter;
