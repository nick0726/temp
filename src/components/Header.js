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
              íėŽėę°
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
              ęļ°ė 
            </li>
            <li
              onClick={() => {
                navigate("/products");
                setLandingOn(false);
                setHeaderFixOn(true);
              }}
              onMouseEnter={() => setSubMenuOn(true)}
            >
              ė í
            </li>
            <li
              onClick={() => {
                navigate("/RnD");
                setLandingOn(false);
                setHeaderFixOn(true);
              }}
              onMouseEnter={() => setSubMenuOn(true)}
            >
              ė°ęĩŽę°ë°
            </li>
            <li
              onClick={() => {
                navigate("/Productquery");
                setLandingOn(false);
                setHeaderFixOn(true);
              }}
              onMouseEnter={() => setSubMenuOn(true)}
            >
              ė§ė ë° ėëđėĪ
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
              ëĄę·ļėļ
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
                <li>ėļėŽë§</li>
                <li>ëđė </li>
                <li>ė°í</li>
                <li>ë§īëē</li>
                <li>ííļëėŽ</li>
                <li>ëģīëėëĢ</li>
              </ul>
            </div>
            <div id="tech-list" className="list">
              <ul>
                <li>
                  ėííļėĻėī ęļ°ë°
                  <br />
                  ėęĩŽėķė  ėęģ ëĶŽėĶ
                </li>
                {/* <div className="menu-border" /> */}
                <li>ėļęģĩė§ëĨ(AI)</li>
                <li>
                  ę°ëģ ėĢžíė ëėĄ°
                  <br />
                  ëėę·đ ėęģ ëĶŽėĶ
                </li>
                <li>ę°ėíėĪ(VR)</li>
              </ul>
            </div>
            <div id="product-list" className="list">
              <ul>
                <li>
                  ííęļ°ëĨ ëķė
                  <br />
                  ėííļėĻėī
                </li>
                <li>
                  ėīė§ëž ėŽí
                  <br />
                  ėííļėĻėī
                </li>
                <li>
                  ėėėėŽęē°ė ė§ė
                  <br />
                  ėííļėĻėī
                </li>
                <li>
                  ėīëŠ ëė§íļ
                  <br />
                  ė ėė―
                </li>
              </ul>
            </div>
            <div id="RnD-list" className="list">
              <ul>
                <li>
                  ëģīė ęļ°ė  ë°<br />
                  íđí
                </li>
                <li>
                  ė°ęĩŽ ë°<br />
                  ëžëŽļėëĢ
                </li>
              </ul>
            </div>
            <div id="query-list" className="list">
              <ul>
                <li>ė íëŽļė</li>
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
