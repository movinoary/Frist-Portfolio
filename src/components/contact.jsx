import React from "react";
import * as BsIcons from "react-icons/bs";
import * as cssModule from "../scss/index";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm("portfolio", "my_portfolio", e.target, "inqtg7j--0wFppFCa")
      .then(
        result => {
          alert("You Succes Send E-mail to mohvinoary@gmail.com");
        },
        error => {
          alert("Please input what you want to talk about, Thank You 사랑");
        }
      );
    e.target.reset();
  };

  return (
    <section className={cssModule.Components.contact} id="contact">
      <div className={cssModule.Components.contactTop}>
        <h1>
          tHan<span>K</span> y<span>O</span>u <span>F</span>o<span>R</span> co
          <span>M</span>in<span>G</span>
        </h1>
        <h1>
          i<span>f</span> <span>y</span>ou interes
          <span>ted</span>
        </h1>
        <h1>
          le<span>T's</span> co<span>nTA</span>ct <span>M</span>e
        </h1>
      </div>
      <div className={cssModule.Components.contactMiddle}>
        <form onSubmit={sendEmail}>
          <div>
            <label htmlFor="name">Hello Vino, My name is</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">This is my E-mail</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">I want talk to you about</label>
            <input type="text" id="message" name="message" />
          </div>
          <div>
            <button type="submit" value="Send">
              Send
            </button>
          </div>
        </form>
      </div>
      <div className={cssModule.Components.contactBottom}>
        <a href="https://wa.me/6285156611224" target="_blank" rel="noreferrer">
          <BsIcons.BsWhatsapp />
          <p>
            +62<span>851</span>5661<span>1224</span>
          </p>
        </a>
        <a href="https://t.me/vinoarystio" target="_blank" rel="noreferrer">
          <BsIcons.BsTelegram />
          <p>@vinoarystio</p>
        </a>
        <a
          href="https://www.instagram.com/vinoarystio/"
          target="_blank"
          rel="noreferrer"
        >
          <BsIcons.BsInstagram />
          <p>vinoarystio</p>
        </a>
        <a href="https://github.com/movinoary" target="_blank" rel="noreferrer">
          <BsIcons.BsGithub />
          <p>movinoary</p>
        </a>
        <a
          href="https://www.linkedin.com/in/vino-arystio-521b15244/"
          target="_blank"
          rel="noreferrer"
        >
          <BsIcons.BsLinkedin />
          <p>
            vino<span>arystio</span>
          </p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
