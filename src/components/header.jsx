import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as Image from "../images/index";
import * as cssModule from "../scss/index";

const Header = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  // console.log(mousePosition);

  const [imgMove, setImgMove] = useState();

  const MoveImg = () => {
    const stylesImg = {
      transform: "translateY(" + window.scrollY / 3.35 + "px)",
    };

    setImgMove(stylesImg);
  };

  window.addEventListener("scroll", MoveImg);

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 0, // 16 diambil dari height dbagi 2
      y: mousePosition.y - 0,
      // backgroundColor: "yellow",
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference",
    },
  };
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <header className={cssModule.Components.header} id="home">
      <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <motion.h1
          initial={{ opacity: 1, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          jun<span>i</span>o
          <span className={cssModule.Components.spanBlue}>R</span>{" "}
          <span>W</span>eb
        </motion.h1>
        <motion.h1
          initial={{ opacity: 1, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          de<span className={cssModule.Components.spanBlue}>V</span>eL
          <span>o</span>pe
          <span className={cssModule.Components.spanBlue}>R</span>;
        </motion.h1>
        <motion.div
          className={cssModule.Components.cursor}
          variants={variants}
          animate={cursorVariant}
        />
      </div>
      <div className={cssModule.Components.headerImg} style={imgMove}>
        <motion.img
          src={Image.Side}
          alt="profile"
          whileTap={{ scale: 0.9 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          initial={{ opacity: 1, y: 100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        />
      </div>
    </header>
  );
};

export default Header;
