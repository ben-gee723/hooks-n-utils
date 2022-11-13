// UTILITY HOOKS
// Date, Dimensions, 

import { useState, useEffect } from 'react';

// TESTING useDate
export function useDate(custom){
  // console.log("Test:", new Date().getUTCHours().toString().length)
  let date = custom ? new Date(custom) : new Date();
  
  // DATES
  let d = date.getDate();
  let m = date.getMonth();
  let y = date.getFullYear();
  let mLong = date.toString().split(" ")[1];

  // TIMES
  const addZero = (timeUnit) => {
    return timeUnit.toString().length === 1 ? `0${timeUnit}`: timeUnit;
  };
  let timestamp = date.getTime();
  let hour24 = addZero(date.getUTCHours())
  let hour12 = addZero(date.getHours());
  let min = addZero(date.getMinutes());
  let sec = addZero(date.getSeconds());
  // AM PM --> add AM/PM

  return {
    short: {  
      standard: `${d}/${m}/${y}`, 
      german: `${d}.${m}.${y}`,
      american: `${m}.${d}.${y}`,
    },
    long: {
      standard: `${d} ${mLong} ${y}`,
      american: `${mLong} ${d} ${y}`,
    },
    time:{
      utc: `${hour24}:${min}:${sec}`,
      standard: `${hour12}:${min}:${sec}`
    },
    timestamp: timestamp 
  };
};

// DIMENSTIONS
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};