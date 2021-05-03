import React from "react";
import "./comstyles/readbtn.css";

const Readbtn = (props) => {
  return (
    <button className="btn btnPrimary">
      <a href={props.readbtn}>Read More</a>
    </button>
  );
};

export default Readbtn;
