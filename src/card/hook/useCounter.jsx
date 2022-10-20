import React, { Component, useState, useEffect } from "react";

const useCounter = (forwards = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCount((prevCount) => prevCount + 1);
      } else {
        setCount((prevCount) => prevCount - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [forwards]);
  return count;
};

export default useCounter;
