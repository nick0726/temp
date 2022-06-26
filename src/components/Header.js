import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.jpg";
import whitelogo from "../images/whitelogo.png";
import NevigationBg from "../images/Nevigation-bg.png";

const Header = ({
  landingOn,
  setLandingOn,
  myPageOn,
  setMyPageOn,
  topBtnColor,
  setTopBtnColor,
}) => {
  const navigate = useNavigate();
  const [subMenu, setSubMenuOn] = useState(false);
  const [setHeaderFix, setHeaderFixOn] = useState(false);

  useEffect(() => {
    let landingLocalStorageOn = localStorage.getItem("landingOn");
    landingLocalStorageOn === null
      ? setLandingOn(true)
      : setLandingOn(landingOn);
    // landingLocalOn === null ? setLandingOn(true) : setLandingOn(false);
    console.log(landingLocalStorageOn);
  }, [landingOn]);

  return (
    <>
      {/* {console.log(landingOn)} */}
      <div
        className="header"
        style={{
          backgroundColor: `${landingOn ? "transparent" : "white"}`,
          position: `${setHeaderFix === true ? "relative" : "fixed"}`,
        }}
      >
        <div
          className="logo"
          style={{
            color: `${landingOn ? "white" : "black"}`,
          }}
          onClick={() => {
            navigate("/");
            setLandingOn(true);
            setHeaderFixOn(false); /* true = relative,  flase = fixed*/
          }}
        >
          {landingOn === true ? (
            <img src={whitelogo} alt={whitelogo} />
          ) : (
            <img src={logo} alt={logo} />
          )}
        </div>
        <div
          className="menu-nav"
          style={{
            color: `${landingOn ? "white" : "black"}`,
          }}
        >
          <ul>
            <li
              onClick={() => {
                navigate("/company");
                setLandingOn(false);
                setHeaderFixOn(true);
              }}
              onMouseEnter={() => setSubMenuOn(true)}
            >
              회사소개
            </li>
            <li
              onClick={() => {
                navigate("/technology");
                setLandingOn(false);
                setHeaderFixOn(true);
                console.log(setHeaderFix);
              }}
              onMouseEnter={() => setSubMenuOn(true)}
            >
              기술
            </li>
            <li
              onClick={() => {
                navigate("/products");
                setLandingOn(false);
                setHeaderFixOn(true);
              }}
              onMouseEnter={() => setSubMenuOn(true)}
            >
              제품
            </li>
            <li
              onClick={() => {
                navigate("/RnD");
                setLandingOn(false);
                setHeaderFixOn(true);
              }}
              onMouseEnter={() => setSubMenuOn(true)}
            >
              연구개발
            </li>
            <li
              onClick={() => {
                navigate("/Productquery");
                setLandingOn(false);
                setHeaderFixOn(true);
              }}
              onMouseEnter={() => setSubMenuOn(true)}
            >
              지원 및 서비스
            </li>
          </ul>
        </div>
        <div className="right-top-menu">
          <div className="language-Btn">
            <button
              style={{
                color: `${landingOn ? "white" : "black"}`,
                border: `${landingOn ? "1px solid white" : "1px solid black"}`,
              }}
            >
              Language
            </button>
          </div>
          <div className="mypage-Btn">
            <button
              onClick={() => {
                navigate("/mypage");
                setLandingOn(false);
                setHeaderFixOn(false);
                localStorage.setItem("landingOn", false);
                // setMyPageOn(false);
                // setTopBtnColor(false);
              }}
            >
              {/* {console.log(localStorage.getItem('landingOn'))} */}
              MyPage
            </button>
          </div>
          <div className="login-Btn">
            <button
              onClick={() => {
                navigate("/login");
                setLandingOn(false);
                setHeaderFixOn(false);
              }}
            >
              로그인
            </button>
          </div>
        </div>
        {/* {subMenu === true ? <SubMenu /> : null} */}
        {subMenu ? <SubMenu /> : null}
      </div>
    </>
  );

  function SubMenu() {
    return (
      <>
        <div className="submenu" onMouseLeave={() => setSubMenuOn(false)}>
          <div className="submenu-logo">
            <div className="logo-left"></div>
            <div className="logo-right">
              <img src={NevigationBg} />
            </div>
          </div>
          <div className="list-open">
            <div id="intro-list" className="list">
              <ul>
                <li>인사말</li>
                <li>비전</li>
                <li>연혁</li>
                <li>맴버</li>
                <li>파트너사</li>
                <li>보도자료</li>
              </ul>
            </div>
            <div id="tech-list" className="list">
              <ul>
                <li>
                  소프트웨어 기반
                  <br />
                  안구추적 알고리즘
                </li>
                {/* <div className="menu-border" /> */}
                <li>인공지능(AI)</li>
                <li>
                  개별 주파수 동조
                  <br />
                  뇌자극 알고리즘
                </li>
                <li>가상현실(VR)</li>
              </ul>
            </div>
            <div id="product-list" className="list">
              <ul>
                <li>
                  평형기능 분석
                  <br />
                  소프트웨어
                </li>
                <li>
                  어지럼 재활
                  <br />
                  소프트웨어
                </li>
                <li>
                  임상의사결정지원
                  <br />
                  소프트웨어
                </li>
                <li>
                  이명 디지털
                  <br />
                  전자약
                </li>
              </ul>
            </div>
            <div id="RnD-list" className="list">
              <ul>
                <li>
                  보유기술 및<br />
                  특허
                </li>
                <li>
                  연구 및<br />
                  논문자료
                </li>
              </ul>
            </div>
            <div id="query-list" className="list">
              <ul>
                <li>제품문의</li>
                <li>FAQ</li>
                <li>Q&A</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Header;
