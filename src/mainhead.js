import React from "react";
import "./mainhead.css";
let date = new Date();

function Mainhead() {
  return (
    <section className="header">
      <div className="mainHeading">
        <h2>Watch the Latest News From Around the World</h2>
      </div>
      <p className="headerTime">It's {date.getHours()} O'Clock</p>
    </section>
  );
}

export default Mainhead;
