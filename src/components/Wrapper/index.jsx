import React from "react";
import "./wrapper.css"
//Wrapper component
function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
