import React from "react";
import Mcard from "./newscom/Mcard";

function Card(props) {
  return (
    <>
      <section className="cards">
        {props.newsData.articles.map((value, index) => {
          return (
            <Mcard
              key={index + 1}
              imgSrc={value.urlToImage}
              altTag={value.title}
              title={value.title}
              description={value.description}
              content={value.content}
              btnurl={value.url}
            />
          );
        })}
      </section>
    </>
  );
}

export default Card;
