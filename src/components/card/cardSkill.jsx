import React, { useState } from "react";
import * as cssModule from "../../scss/index";

const CardSkill = ({ item }) => {
  const [show, setShow] = useState(true);

  const handleClick = () => setShow(!show);

  const image = {
    backgroundImage: `url(${item.image})`,
  };

  return (
    <div
      className={show ? cssModule.Card.cardSkill : cssModule.Card.modalSkill}
      style={image}
    >
      <div className={cssModule.Card.cardSkillTop}>
        <h1 className={cssModule.Card.skillTopTitle}>{item.title}</h1>
        <div className={cssModule.Card.skillTopIcons}>
          {item.icon.map(icon => (
            <span key={icon.id}>{icon.icon}</span>
          ))}
        </div>
      </div>
      <div onClick={handleClick} className={cssModule.Card.cardSkillDesc}>
        <p>{item.desc}</p>
        <p>{item.subDesc}</p>
        <p>{item.endDesc}</p>
      </div>
    </div>
  );
};

export default CardSkill;
