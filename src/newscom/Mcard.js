import React from "react";
import Title from "./Title";
import Img from "./Img";
import Desc from "./Desc";
import Readbtn from "./Readbtn";
import "./maincomstyles/Mcard.css";

const Mcard = (props) => {
  return (
    <div className="newsCard">
      <div className="newsImg">
        <Img imgSrc={props.imgSrc} altTag={props.title} />
      </div>
      <div className="newsInfo">
        <Title title={props.title.slice(0, 65)} />
        <Desc description={props.content.slice(0, 197) + "  ..."} />
        {/* <Desc description={props.description} /> */}
        <Readbtn readbtn={props.btnurl} />
      </div>
    </div>
  );
};

export default Mcard;
