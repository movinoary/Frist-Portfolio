import React from "react";
import * as Data from "../data/index";
import * as Card from "./card/index";
import * as cssModule from "../scss/index";

const Skill = () => {
  return (
    <section className={cssModule.Components.skill} id="skill">
      <div className={cssModule.Components.skillTop}>
        <p>
          Yes my skills, a lot about computers. so i'm not quite social, and i
          can't talk too much. I have skill basic that is Design with Adobe,
          Documentation in office, Basic Read Korean Language in the song. But
          basic only. And in Web Developer, my skill less more to Front-End
          Developer. And for Back-End Developer for me. can CRUD is quite, to
          broke my head.
        </p>
      </div>
      <div className={cssModule.Components.skillBottom}>
        <div
          className={cssModule.Components.skillLeft}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1>
            <span>M</span>ys<span>K</span>ill
          </h1>
        </div>
        <div className={cssModule.Components.skillRight}>
          {Data.DataSkill.map(item => (
            <Card.CardSkill item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
