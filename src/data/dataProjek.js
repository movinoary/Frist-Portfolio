import * as Img from "../images/index";
import * as DiIcons from "react-icons/di";
import * as GrIcons from "react-icons/gr";
import * as FaIcons from "react-icons/fa";
import * as TbIcons from "react-icons/tb";
import * as SiIcons from "react-icons/si";
import * as RiIcons from "react-icons/ri";
import * as cssModule from "../scss/index";

export const DataProjek = [
  {
    id: 1,
    title: "SD Jatirahayu v.2",
    image: Img.webFive,
    desc: "After a few months I was asked to return to continue my project at school. I apply everything I've learned in Bootcamp. Because before it was still undirected. for home page i implement swiper Js for image carousel, Apex Chart for chart, React-Video for import video from youtube. The dashboard feature for admin and guru is read. CRUD make in react-query. On the backend only API for CRUD. But the table is complicated for me, so it's still under development. Please visit to see it, but it's static only",
    create: [
      {
        id: 1,
        icon: <FaIcons.FaReact />,
        class: cssModule.Card.reactJs,
      },
      {
        id: 2,
        icon: <FaIcons.FaNodeJs />,
        class: cssModule.Card.nodeJs,
      },
      {
        id: 3,
        icon: <FaIcons.FaGithub />,
        class: cssModule.Card.github,
        link: "https://github.com/movinoary/Demo-SD",
      },
      {
        id: 4,
        icon: <GrIcons.GrFirefox />,
        class: cssModule.Card.firefox,
        link: "https://demo-sd.netlify.app/",
      },
    ],
    tech: [
      {
        id: 1,
        icon: <FaIcons.FaSass />,
        class: cssModule.Card.sass,
      },
      {
        id: 2,
        icon: <GrIcons.GrMysql />,
        class: cssModule.Card.mySql,
      },
      {
        id: 2,
        icon: <SiIcons.SiFramer />,
        class: cssModule.Card.framer,
      },
      {
        id: 4,
        icon: <SiIcons.SiSequelize />,
        class: cssModule.Card.sequelize,
      },
      {
        id: 5,
        icon: <RiIcons.RiReactjsLine />,
        class: cssModule.Card.reactJs,
      },
    ],
  },
  {
    id: 2,
    title: "dumb.Beans",
    image: Img.webFour,
    desc: "This is the last task in bootcamp. not much different from dumbmerce. the different is the transaction terdapat di cart, in nav have image profile, and don't have feature compare in here. I'm quite overwhelmed here because the deadline is a week. So the basket doesn't work properly. And my own shortcomings are still not being able to implement the backend properly.",
    create: [
      {
        id: 1,
        icon: <FaIcons.FaReact />,
        class: cssModule.Card.reactJs,
      },
      {
        id: 2,
        icon: <FaIcons.FaNodeJs />,
        class: cssModule.Card.nodeJs,
      },
      {
        id: 3,
        icon: <FaIcons.FaGithub />,
        class: cssModule.Card.github,
        link: "https://github.com/movinoary/Ways-Beans-Client",
      },
      {
        id: 4,
        icon: <GrIcons.GrFirefox />,
        class: cssModule.Card.firefox,
        link: "https://let-s-go-productive.vercel.app/",
      },
    ],
    tech: [
      {
        id: 1,
        icon: <FaIcons.FaSass />,
        class: cssModule.Card.sass,
      },
      {
        id: 2,
        icon: <GrIcons.GrMysql />,
        class: cssModule.Card.mySql,
      },
      {
        id: 4,
        icon: <SiIcons.SiSequelize />,
        class: cssModule.Card.sequelize,
      },
      {
        id: 5,
        icon: <RiIcons.RiReactjsLine />,
        class: cssModule.Card.reactJs,
      },
      {
        id: 5,
        icon: <SiIcons.SiSocketdotio />,
        class: cssModule.Card.socket,
      },
    ],
  },
  {
    id: 3,
    title: "dumbMercy",
    image: Img.webThree,
    desc: "Dumbmerce is task 3 in my bootcamp, here using the framework React in FrontEnd, and Nodejs dengan express for backend. The feature is chat to seller, Transaction in one product, and compare product. I create compare product because,when i want buy in onlineshop, i like compare multiple products. and in a few online shop don't have compare product. that's why I made a product comparison i made front-end 3 days, in back-end 5 days, dan 5 days to fetching CRUD in front-end plus feature chat and transaction.",
    create: [
      {
        id: 1,
        icon: <FaIcons.FaReact />,
        class: cssModule.Card.reactJs,
      },
      {
        id: 2,
        icon: <FaIcons.FaNodeJs />,
        class: cssModule.Card.nodeJs,
      },
      {
        id: 3,
        icon: <FaIcons.FaGithub />,
        class: cssModule.Card.github,
        link: "https://github.com/movinoary/dumb-merch",
      },
      {
        id: 4,
        icon: <GrIcons.GrFirefox />,
        class: cssModule.Card.firefox,
        link: "https://let-s-go-productive.vercel.app/",
      },
    ],
    tech: [
      {
        id: 1,
        icon: <FaIcons.FaCss3Alt />,
        class: cssModule.Card.css,
      },
      {
        id: 2,
        icon: <GrIcons.GrMysql />,
        class: cssModule.Card.mySql,
      },
      {
        id: 3,
        icon: <SiIcons.SiSequelize />,
        class: cssModule.Card.sequelize,
      },
      {
        id: 4,
        icon: <RiIcons.RiReactjsLine />,
        class: cssModule.Card.reactJs,
      },
      {
        id: 5,
        icon: <SiIcons.SiSocketdotio />,
        class: cssModule.Card.socket,
      },
    ],
  },
  {
    id: 4,
    title: "React Native",
    video: Img.reactNative,
    desc: "This is my first time to make a mobile application so it's not good. and this is my fourth assignment in bootcamp. the features that exist are my profile, calculator to calculate, and to-do list. Here there is a drawback, namely in the todoList section the edit feature is still not available. I made 3 days, some copy-pasted but I can modify it fine, and changed some code to be what I want",
    create: [
      {
        id: 1,
        icon: <TbIcons.TbBrandReactNative />,
        class: cssModule.Card.reactJs,
      },
      {
        id: 2,
        icon: <FaIcons.FaNodeJs />,
        class: cssModule.Card.nodeJs,
      },
      {
        id: 3,
        icon: <FaIcons.FaGithub />,
        class: cssModule.Card.github,
        link: "https://github.com/movinoary/Fundamental-React-Native",
      },
    ],
  },
  {
    id: 5,
    title: "Let's go Productive",
    image: Img.WebOne,
    desc: "When i search costume desktop windows. I don't find custom desktop style in my pc i want. And i found one web include what i want, but problem is wallpaper no good for me. Finally i think to create once web for me to productive in work. This is simple Web, but in web powerfull to me. Deficiency for me is, We must open web browser to run this. i made this less more one week.",
    create: [
      {
        id: 1,
        icon: <FaIcons.FaHtml5 />,
        class: cssModule.Card.html,
      },
      {
        id: 2,
        icon: <DiIcons.DiJavascript1 />,
        class: cssModule.Card.javaScript,
      },
      {
        id: 3,
        icon: <FaIcons.FaGithub />,
        class: cssModule.Card.github,
        link: "https://github.com/movinoary/Let-s-go-productive",
      },
      {
        id: 4,
        icon: <GrIcons.GrFirefox />,
        class: cssModule.Card.firefox,
        link: "https://let-s-go-productive.vercel.app/",
      },
    ],
  },
  {
    id: 6,
    title: "E-xommerc",
    image: Img.webEXommer,
    desc: "I'm here to help my friend who is in need of a web, I'm here to work on the front-end only, while my friend is working on the backend.",
    create: [
      {
        id: 1,
        icon: <FaIcons.FaReact />,
        class: cssModule.Card.reactJs,
      },
      {
        id: 2,
        icon: <FaIcons.FaGithub />,
        class: cssModule.Card.github,
        link: "https://github.com/movinoary/e-xommercs",
      },
      {
        id: 3,
        icon: <GrIcons.GrFirefox />,
        class: cssModule.Card.firefox,
        link: "https://e-xommerce.netlify.app/",
      },
    ],
  },
  {
    id: 7,
    title: "Blog",
    image: Img.webTwoOne,
    desc: "development of simpleBlog. I create with Node Js for back-end, Handlebars for Display Show, BootStrap for CSS, and PostgreSQL for Database. I've implemented a login, see the posts based on who made it, and the blog details are up and running. I made it in a one week",
    create: [
      {
        id: 1,
        icon: <SiIcons.SiHandlebarsdotjs />,
        class: cssModule.Card.html,
      },
      {
        id: 2,
        icon: <FaIcons.FaNodeJs />,
        class: cssModule.Card.nodeJs,
      },
      {
        id: 3,
        icon: <FaIcons.FaGithub />,
        class: cssModule.Card.github,
        link: "https://github.com/movinoary/B1-C2/",
      },
      {
        id: 4,
        icon: <GrIcons.GrFirefox />,
        class: cssModule.Card.firefox,
        link: "https://simple-blog-three.vercel.app/",
      },
    ],
    tech: [
      {
        id: 1,
        icon: <FaIcons.FaBootstrap />,
        class: cssModule.Card.bootstrap,
      },
      {
        id: 2,
        icon: <DiIcons.DiJavascript1 />,
        class: cssModule.Card.javaScript,
      },
      {
        id: 2,
        icon: <SiIcons.SiPostgresql />,
        class: cssModule.Card.postgre,
      },
    ],
  },
  {
    id: 8,
    title: "simpleBlog",
    image: Img.webTwo,
    desc: "This Web I Create in BootCamp DumbWays.id Frist Task. Feature is You can E-mail to me in web automatic open E-mail App in desktop . Link to social media active. Add Project Active. Edit, delete no active, because i create no BackEnd. The problem is if you add projek, detail-projek not working. Because the route no auto create in html. i made this one week.",
    create: [
      {
        id: 1,
        icon: <FaIcons.FaHtml5 />,
        class: cssModule.Card.html,
      },
      {
        id: 2,
        icon: <DiIcons.DiJavascript1 />,
        class: cssModule.Card.javaScript,
      },
      {
        id: 3,
        icon: <FaIcons.FaGithub />,
        class: cssModule.Card.github,
        link: "https://github.com/movinoary/SimpleBlog",
      },
      {
        id: 4,
        icon: <GrIcons.GrFirefox />,
        class: cssModule.Card.firefox,
        link: "https://simple-blog-three.vercel.app/",
      },
    ],
  },
  {
    id: 9,
    title: "SD Jatirahayu v.1",
    video: Img.sdv1,
    desc: "This is my first project. That makes me feel this is my world. I think there are still many shortcomings here due to inappropriate margins and messy designs. Maybe because this my first project. It even took 2 months to make it, and my code is so messy. this project i don't implement backend. So that i make data dummy or static data. What can't be arranged. I deploy for Local Server at school.",
    create: [
      {
        id: 1,
        icon: <FaIcons.FaReact />,
        class: cssModule.Card.reactJs,
      },
      {
        id: 2,
        icon: <FaIcons.FaGithub />,
        class: cssModule.Card.github,
        link: "https://github.com/movinoary/SD-jatihatayu-IV-Client-pertama-",
      },
    ],
  },
];
