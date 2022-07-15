import * as Image from "../images/index";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import * as ImIcons from "react-icons/im";

export const DataSkill = [
  {
    id: 1,
    title: "COMputer",
    image: Image.Apjii,
    desc: "My journey in Junior High School when i modifikasi my phone to unlock SU or the famous root android phone.",
    subDesc:
      "Then I continued to vocational high school majoring in computer and network engineering. Yes, every day make UTP cable and electrocuted. It's definitely basic like installing Windows and Linux OS, Assembling a PC, PC troubleshooting, Network Design, etc. like a network person. But when it comes to software making programs I really hate it. So that nothing entered my head about the lesson.",
    endDesc:
      "Even on campus, I majored in Professional Network Administration. But unfortunately there was a 'Quarter life crisis' in my life. and looking for all available avenues from design, photography, writing short stories, writing novels, UI/UX, Data Analysis and finally getting the help of friends to start learning programming. From learning programming I found which path I should take.",
    icon: [
      {
        id: 1,
        icon: <MdIcons.MdOutlineComputer />,
      },
      {
        id: 2,
        icon: <FaIcons.FaNetworkWired />,
      },
      {
        id: 3,
        icon: <FaIcons.FaDatabase />,
      },
      {
        id: 4,
        icon: <ImIcons.ImBooks />,
      },
      {
        id: 5,
        icon: <SiIcons.SiAdobeillustrator />,
      },
    ],
  },
  {
    id: 2,
    title: "FROntend",
    image: Image.Coding,
    desc: "Starting from HTML to CSS. A month I learned to write and become a website.",
    subDesc:
      "I thought it turned out to be like creating a website. and it turns out I still have a lot to learn. I chose the React framework because it's easier than Angular I've ever learned. From React I have also made an application and it is still lacking. Because React is for the Front-End, while the Web that I create must also have a backend.",
    endDesc:
      "In React I learned a lot of technology. My expertise can be apexchart, React-player, React-Chrono, EmailJs, Hooks, React-Router, CRUD with Fect, Axios, React-Query. Design Scss, Bootstrap, tailwind, styled-components, and Animations such as Framer-motion, React-Spring, and animation on scroll. Besides react I've learned NextJS but not so much.",
    icon: [
      {
        id: 1,
        icon: <FaIcons.FaReact />,
      },
      {
        id: 2,
        icon: <TbIcons.TbBrandNextjs />,
      },
      {
        id: 3,
        icon: <FaIcons.FaGithub />,
      },
      {
        id: 4,
        icon: <FaIcons.FaSass />,
      },
      {
        id: 5,
        icon: <SiIcons.SiTailwindcss />,
      },
    ],
  },
  {
    id: 3,
    title: "BACkend",
    image: Image.Computer,
    desc: "Because the web that I create must use the backend I started learning from expressJS and that's it.",
    subDesc:
      "Because I was wrong at the beginning not to learn JavaScript first. So many don't know. Fortunately, when I was in college, I learned ERD, Database Relations, using sql server management, so it didn't take long. But still I have nothing to do. So I decided to join Bootcamp to be more focused. Because the IT world is already vast, and it is definitely wider.",
    endDesc:
      "So now I can create logins, CRUD connect to databases using Sequelize, Chat Features Using Socket.io, and payments using midtrans. But in this back-end I copy and paste more. and that makes me less back-end. What's important is that I can be responsible for the code that I create. But still I'm not very back-end.",
    icon: [
      {
        id: 1,
        icon: <FaIcons.FaNodeJs />,
      },
      {
        id: 2,
        icon: <SiIcons.SiExpress />,
      },
      {
        id: 3,
        icon: <SiIcons.SiNetlify />,
      },

      {
        id: 4,
        icon: <SiIcons.SiSequelize />,
      },
      {
        id: 5,
        icon: <SiIcons.SiMysql />,
      },
    ],
  },
];
