import React from "react";
import * as cssModule from "../../scss/index";

const CardStoryLeft = ({
  title,
  subTitle,
  endTitle,
  desc,
  subDesc,
  endDesc,
}) => {
  return (
    <div className={cssModule.Card.cardStoryLeft}>
      <h1>
        {title}
        <span>{subTitle}</span>
        {endTitle}
      </h1>
      <div>
        <p>{desc}</p>
        <p>{subDesc}</p>
        <p>{endDesc}</p>
      </div>
    </div>
  );
};

const CardStoryRight = ({ title, subTitle, endTitle, desc }) => {
  return (
    <div className={cssModule.Card.cardStoryRight}>
      <h1>
        {title}
        <span>{subTitle}</span>
        {endTitle}
      </h1>
      <div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export { CardStoryLeft, CardStoryRight };
