import * as Components from "./components/index";
import * as FaIcons from "react-icons/md";
import * as cssModule from "./scss/index";
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  const [buttonTop, setButtonTop] = useState(false);
  const [isLoadng, setIsLogin] = useState(true);

  const showButton = () => {
    if (window.scrollY >= 400) {
      setButtonTop(true);
    } else {
      setButtonTop(false);
    }
  };

  useEffect(() => {
    setIsLogin(true);
    setTimeout(() => {
      setIsLogin(false);
    }, 5000);
  }, []);

  window.addEventListener("scroll", showButton);

  return (
    <>
      {isLoadng ? (
        <Components.Loading />
      ) : (
        <>
          <Components.Nav />
          <Components.Header />
          <Components.About />
          <Components.Skill />
          <Components.Projek />
          <Components.Contact />
          <div
            className={
              buttonTop
                ? cssModule.Components.iconTop
                : cssModule.Components.iconTopHide
            }
          >
            <a href="#home">
              <FaIcons.MdDoubleArrow />
            </a>
          </div>
        </>
      )}
    </>
  );
}

export default App;
