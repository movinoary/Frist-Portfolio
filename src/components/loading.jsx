import React from "react";
import * as cssModule from "../scss/index";

const Loading = () => {
  return (
    <div className={cssModule.Components.loadingScreen}>
      <div
        data-aos="fade-down-right"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-in"
      >
        <h1>
          <span>H</span>i<span>,,</span>
        </h1>
      </div>
      <div
        data-aos="fade-down-left"
        data-aos-delay="1000"
        data-aos-duration="1000"
        data-aos-easing="ease-in-in"
      >
        <h1>
          H<span>A</span>LL<span>O</span>
        </h1>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="3000"
        data-aos-duration="1000"
        data-aos-easing="ease-in-in"
      >
        <h1>
          THE <span>Portfolio</span> Story...
        </h1>
      </div>
      <div
        data-aos="fade-up-right"
        data-aos-delay="2500"
        data-aos-duration="1000"
        data-aos-easing="ease-in-in"
      >
        <h1>
          <span>안녕</span>하세요
        </h1>
      </div>
      <div
        data-aos="fade-up-left"
        data-aos-delay="2000"
        data-aos-duration="1000"
        data-aos-easing="ease-in-in"
      >
        <h1>
          こんに
          <span>ちは</span>
        </h1>
      </div>
    </div>
  );
};

export default Loading;
