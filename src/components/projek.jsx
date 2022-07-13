import React from "react";
import CardProjek from "./card/cardProjek";
import * as Data from "../data/index";
import * as cssModule from "../scss/index";

const Projek = () => {
  return (
    <section id="projects" className={cssModule.Components.projek}>
      <div className={cssModule.Components.projekLeft}>
        <div className={cssModule.Components.projekLeftTop}>
          <p>
            Finally these are some websites that I made. I practice more to the
            front-end, on the back-end just enough to learn. And I prefer css or
            scss because I am free to modify the design on my website. There are
            some websites that are not perfect. Let's see and I'll tell you on
            the card you choose.
          </p>
        </div>
        <div className={cssModule.Components.projekLeftBottom}>
          {Data.DataProjek.map(item => (
            <CardProjek key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div
        className={cssModule.Components.projekRight}
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1>
          r<span>R</span>ojec<span>T</span>s
        </h1>
      </div>
    </section>
  );
};

export default Projek;
