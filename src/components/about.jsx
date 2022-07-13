import React from "react";
import { motion } from "framer-motion";
import * as cssModule from "../scss/index";
import * as Card from "./card/index";

const About = () => {
  return (
    <section className={cssModule.Components.about} id="about">
      <div className={cssModule.Components.aboutName}>
        <motion.h1
          initial={{ opacity: 1, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Mohammad Vino
        </motion.h1>
        <motion.h1
          initial={{ opacity: 1, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Arystio
        </motion.h1>
      </div>
      <div className={cssModule.Components.aboutDesc}>
        <Card.CardStoryLeft
          title="Who"
          subTitle="am"
          endTitle="i?"
          desc="Passion about the world of IT. It's been 6 years studying IT from Hardware, Network, Design, ect and after trying various things, finally I learned software.Why software in the final? Because 5 years I hate it. and I fell in love last year with Coding. The specific is Front-end Developer. Like, you many years very hate one girl , and you don't no why, the earth is rotates. So that right now You crazy love with she. yes that's how i feel."
          subDesc="I can be in front of the monitor for 12 hours more, and less. With create website i can forget my phone. But I have to stop when my coffee runs out. I am very interested in front-end developer because I feel comfortable with the job. Even though I'm dizzy but I won't stop until I can"
          endDesc="I hope my skills, enough to take me to a new world and take me to my dream. I'm not an expert, but I want to be an expert in the next 10 years. maybe, the sooner the better."
        />
      </div>
    </section>
  );
};

export default About;
