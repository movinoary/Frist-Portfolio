import React, { useState } from "react";
import * as cssModule from "../scss/index";
import * as Card from "./card/index";

const Skill = () => {
  const [clickOne, setClickOne] = useState(false);
  const [clickTwo, setClickTwo] = useState(false);
  const [clickThree, setClickThree] = useState(false);

  const ShowOne = () => setClickOne(!clickOne);
  const ShowTwo = () => setClickTwo(!clickTwo);
  const ShowThree = () => setClickThree(!clickThree);

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
          <div
            onClick={ShowOne}
            className={
              clickOne
                ? cssModule.Components.openActive1
                : cssModule.Components.panel1
            }
          >
            <p>
              My journey in Junior High School when i modifikasi my phone to
              unlock SU or the famous root android phone. Then I continued to
              vocational high school majoring in computer and network
              engineering. Yes, every day make UTP cable and electrocuted. It's
              definitely basic like installing Windows and Linux OS, Assembling
              a PC, PC troubleshooting, Network Design, etc. like a network
              person. But when it comes to software making programs I really
              hate it. So that nothing entered my head about the lesson.
            </p>
            <p>Computer</p>
            <p>
              Even on campus, I majored in Professional Network Administration.
              But unfortunately there was a "Quarter life crisis" in my life.
              and looking for all available avenues from design, photography,
              writing short stories, writing novels, UI/UX, Data Analysis and
              finally getting the help of friends to start learning programming.
              From learning programming I found which path I should take.
            </p>
          </div>
          <div
            onClick={ShowTwo}
            className={
              clickTwo
                ? cssModule.Components.openActive2
                : cssModule.Components.panel2
            }
          >
            <p>
              Starting from HTML to CSS. A month I learned to write and become a
              website. I thought it turned out to be like creating a website.
              and it turns out I still have a lot to learn. I chose the React
              framework because it's easier than Angular I've ever learned. From
              React I have also made an application and it is still lacking.
              Because React is for the Front-End, while the Web that I create
              must also have a backend.
            </p>
            <p>Front-End</p>
            <p>
              In React I learned a lot of technology. My expertise can be
              apexchart, React-player, React-Chrono, EmailJs, Hooks,
              React-Router, CRUD with Fect, Axios, React-Query. Design Scss,
              Bootstrap, tailwind, styled-components, and Animations such as
              Framer-motion, React-Spring, and animation on scroll. Besides
              react I've learned NextJS but not so much.
            </p>
          </div>
          <div
            onClick={ShowThree}
            className={
              clickThree
                ? cssModule.Components.openActive3
                : cssModule.Components.panel3
            }
          >
            <p>
              Because the web that I create must use the backend I started
              learning from expressJS and that's it. Because I was wrong at the
              beginning not to learn JavaScript first. So many don't know.
              Fortunately, when I was in college, I learned ERD, Database
              Relations, using sql server management, so it didn't take long.
              But still I have nothing to do. So I decided to join Bootcamp to
              be more focused. Because the IT world is already vast, and it is
              definitely wider.
            </p>
            <p>Back-End</p>
            <p>
              So now I can create logins, CRUD connect to databases using
              Sequelize, Chat Features Using Socket.io, and payments using
              midtrans. But in this back-end I copy and paste more. and that
              makes me less back-end. What's important is that I can be
              responsible for the code that I create. But still I'm not very
              back-end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
