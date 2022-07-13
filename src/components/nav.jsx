import React from "react";
import { motion } from "framer-motion";
import * as cssModule from "../scss/index";

const Nav = () => {
  return (
    <motion.nav
      className={cssModule.Components.nav}
      initial={{ opacity: 1, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.a
        href="#about"
        initial={{ opacity: 1, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About
      </motion.a>
      <motion.a
        href="#skill"
        initial={{ opacity: 1, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skill
      </motion.a>
      <motion.a
        href="#projects"
        initial={{ opacity: 1, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.a>
      <motion.a
        href="#contact"
        initial={{ opacity: 1, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact
      </motion.a>
    </motion.nav>
  );
};

export default Nav;
