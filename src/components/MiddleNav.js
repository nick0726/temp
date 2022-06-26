import React from "react";
import "./MiddleNav.css";
import home from "../images/Home.png";

const MiddleNav = () => {
  return (
    <>
      <div className="middle-nav-box">
        <div className="middle-nav-contents">
          <div className="home-img">
            <img src={home} alt={home} />
          </div>
          <div className="menu">지원/서비스</div>
          <div className="section">
            소프트웨어 기반
            <br />
            안구추적 알고리즘
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleNav;
