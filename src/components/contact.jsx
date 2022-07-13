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
        <h1 data-aos="fade-up" data-aos-duration="1000">
          tHan<span>K</span> y<span>O</span>u <span>F</span>o<span>R</span> co
          <span>M</span>in<span>G</span>
        </h1>
        <h1 data-aos="fade-up" data-aos-duration="1500">
          i<span>f</span> <span>y</span>ou interes
          <span>ted</span>
        </h1>
        <h1 data-aos="fade-up" data-aos-duration="2000">
          le<span>T's</span> co<span>nTA</span>ct <span>M</span>e
        </h1>
      </div>
      <div className={cssModule.Components.contactMiddle}>
        <form onSubmit={sendEmail}>
          <div data-aos="fade-up" data-aos-duration="1000">
            <label htmlFor="name">Hello Vino, My name is</label>
            <input type="text" id="name" name="name" />
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <label htmlFor="email">This is my E-mail</label>
            <input type="email" id="email" name="email" />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <label htmlFor="message">I want talk to you about</label>
            <input type="text" id="message" name="message" />
          </div>
          <div data-aos="fade-up" data-aos-duration="3000">
            <button type="submit" value="Send">
              Send
            </button>
          </div>
        </form>
      </div>
      <div className={cssModule.Components.contactBottom}>
        <a
          href="https://wa.me/6285156611224"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <BsIcons.BsWhatsapp />
          <p>
            +62<span>851</span>5661<span>1224</span>
          </p>
        </a>
        <a
          href="https://t.me/vinoarystio"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-up"
          data-aos-duration="2200"
        >
          <BsIcons.BsTelegram />
          <p>@vinoarystio</p>
        </a>
        <a
          href="https://www.instagram.com/vinoarystio/"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-up"
          data-aos-duration="2400"
        >
          <BsIcons.BsInstagram />
          <p>vinoarystio</p>
        </a>
        <a
          href="https://github.com/movinoary"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-up"
          data-aos-duration="2600"
        >
          <BsIcons.BsGithub />
          <p>movinoary</p>
        </a>
        <a
          href="https://www.linkedin.com/in/vino-arystio-521b15244/"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-up"
          data-aos-duration="2800"
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
