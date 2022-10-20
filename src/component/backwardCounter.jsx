import React, { Component, useEffect, useState } from 'react';
import Card from "../card/card"


const BackwardCounter = props => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
      const interval = setInterval(() => {
          setCount(prevCount => prevCount - 1)
      }, 1000)
      return () => clearInterval(interval)
    }, [])
    return <Card>{count}</Card>
}

export default BackwardCounter