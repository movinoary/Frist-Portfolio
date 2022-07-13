import React, { useState } from "react";
import * as cssModule from "../../scss/index";
import * as GrIcons from "react-icons/gr";
import * as FaIcons from "react-icons/fa";
import * as Card from "./index";

const CardProjek = ({ item }) => {
  const [show, setShow] = useState(true);

  const handleShow = () => setShow(!show);

  return (
    <section
      onClick={handleShow}
      className={show ? cssModule.Card.cardProjek : cssModule.Card.modalProjek}
    >
      <div className={cssModule.Card.projekTitle}>
        <h1>{item.title}</h1>
        {item.image ? <img src={item.image} alt="projek" /> : null}
        {item.video ? (
          <video width="100%" height="100%" controls>
            <source src={item.video} type="video/mp4" />
          </video>
        ) : null}
      </div>
      <div className={cssModule.Card.projekDesc}>
        {item.tech ? (
          <div className={cssModule.Card.iconLeft}>
            {item.tech.map(icon => (
              <Card.CardIcon classname={icon.class} icon={icon.icon} />
            ))}
          </div>
        ) : null}
        <div className={cssModule.Card.iconRight}>
          {item.create.map(icon => (
            <a
              href={icon.link}
              target="_blank"
              rel="noreferrer"
              key={icon.id}
              className={cssModule.Card.iconLink}
            >
              <Card.CardIcon classname={icon.class} icon={icon.icon} />
            </a>
          ))}
        </div>
        <p>{item.desc}</p>
      </div>
    </section>
  );
};

export default CardProjek;
