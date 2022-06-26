/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import ReactFullpage from "@fullpage/react-fullpage";
import mouse from "../../images/mouse.png";
import s1_background from "../../images/Mainpage_background_2.png";
import report1 from "../../images/Mainpage_background_4.jpg";
import Footer from "../../components/Footer";
import rightArrow from "../../images/right-arrow.png";
import leftArrow from "../../images/left-arrow.png";
import news from "../../data/news";
import sphere from "../../images/sphere1.gif";

const LandingPage = ({ landingOn, setLandingOn }) => {
  const navigate = useNavigate();
  const [TechnologyOn, setTechnolohyOn] = useState(true);
  const [AiOn, setAiOn] = useState(false);
  const [VrOn, setVrOn] = useState(false);
  const [AlgorithmOn, setAlgorithmOn] = useState(false);
  const [Algorithm2On, setAlgorithmOn2] = useState(false);

  return (
    <>
      <ReactFullpage
        //fullpage options
        licenseKey={"F9KG8-XM0I7-7I1LI-VUO8J-TYTKM"}
        scrollingSpeed={800} /* Options here */
        navigation
        render={({ state, fullpageApi }) => {
          return (
            <>
              {/* FullPage 작동 구현을 위한 ReactFullpage.Wrapper */}
              <ReactFullpage.Wrapper>
                {/* 첫번쨰 화면: NeuroEars */}
                <div className="section s0">
                  <div className="s0_main_container">
                    <div className="s0_main_container_content">
                      <div className="s0_mainpage_title">
                        <h1>NeuroEars</h1>
                        <h4>평형기능 측정 진단 치료</h4>
                        <h4>소프트웨어 개발 전문기업</h4>
                        <div className="s0_mainpage_btn">
                          <button
                            onClick={() => {
                              navigate("/productquery");
                              setLandingOn(false);
                            }}
                          >
                            문의하기
                          </button>
                        </div>
                      </div>
                      <div className="s0_mainpage_mouse">
                        <img id="bounce" src={mouse} alt={mouse} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 두번쨰 화면 Company 페이지 */}
                <div className="section s1">
                  <div className="s1_main_container">
                    <div className="s1_main_container_content">
                      <div className="s1_mainpage_title">
                        <h1>Company</h1>
                        <div className="s1_mainpage_title_underline"></div>
                        <div className="s1_mainpage_content">
                          <p>
                            뉴로이어즈(주)는 신경이과 전문의료진과 연구개발
                            전문가들이 모여설립한 기업으로, 의학과 뇌공학계와의
                            공동연구를 통해 어지럼과 이명을 쉽고 간단하게
                            진단하고 치료하는 방법을 찾기 위해 설립되었습니다.
                          </p>
                          <div className="s1_mainpage_btn">
                            <button
                              onClick={() => {
                                navigate("/CompanyPage");
                              }}
                            >
                              View More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className='s1_mainpage_img'></div> */}
                    <img
                      className="s1_mainpage_img"
                      src={s1_background}
                      alt={s1_background}
                    />
                  </div>
                </div>

                {/* 세번째 화면: Technology 페이지 */}
                <div className="section s2">
                  <div className="s2_main_container">
                    <div className="s2_main_container_content">
                      <div className="s2_mainpage_title">
                        <h1>Technology</h1>
                        <div className="s2_mainpage_title_underline"></div>
                        {TechnologyOn === true ? <Technology /> : null}
                        {AiOn === true ? <AI /> : null}
                        {AlgorithmOn === true ? <Algorithm /> : null}
                        {VrOn === true ? <VR /> : null}
                        {Algorithm2On === true ? <Algorithm2 /> : null}
                      </div>
                    </div>
                    {/* 구 메뉴 */}
                    <div className="tech-contents">
                      <div className="tech-contents-col">
                        <div></div>
                        <div>
                          <div
                            id="AI"
                            onPointerOver={() => setTechnolohyOn(false)}
                            onPointerEnter={() => setAiOn(true)}
                            onPointerOut={() => setAiOn(false)}
                            onMouseLeave={() => setTechnolohyOn(true)}
                          >
                            인공지능(AI)
                          </div>
                        </div>
                        <div></div>
                      </div>
                      <div className="tech-contents-col">
                        <div
                          id="Algorithm"
                          onPointerOver={() => setTechnolohyOn(false)}
                          onPointerEnter={() => setAlgorithmOn(true)}
                          onPointerOut={() => setAlgorithmOn(false)}
                          onMouseLeave={() => setTechnolohyOn(true)}
                        >
                          개별 주파수
                          <br />
                          동조 뇌자극
                          <br />
                          알고리즘
                        </div>
                        <div id="sec-col">
                          <img
                            id="sphere"
                            src={sphere}
                            // autoPlay='autoplay'
                            // loop='infinite'
                          />
                        </div>
                        <div
                          id="VR"
                          onPointerOver={() => setTechnolohyOn(false)}
                          onPointerEnter={() => setVrOn(true)}
                          onPointerOut={() => setVrOn(false)}
                          onMouseLeave={() => setTechnolohyOn(true)}
                        >
                          가상현실(VR)
                        </div>
                      </div>
                      <div className="tech-contents-col">
                        <div></div>
                        <div
                          id="Algorithm2"
                          onPointerOver={() => setTechnolohyOn(false)}
                          onPointerEnter={() => setAlgorithmOn2(true)}
                          onPointerOut={() => setAlgorithmOn2(false)}
                          onMouseLeave={() => setTechnolohyOn(true)}
                        >
                          소프트웨어
                          <br />
                          기반 안구추적
                          <br />
                          알고리즘
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 네번쨰 화면: 보도자료 페이지 */}
                <div className="section s3">
                  <div className="s3_main_container">
                    <div className="s3_main_container_content">
                      <div className="s3_mainpage_title">
                        <h1>보도자료</h1>
                      </div>
                      <div className="s3_mainpage_news">
                        <div className="s3_mainpage_news_A">
                          <img src={report1} alt={report1} />
                          <div className="s3_mainpage_news_content_A">
                            <h1>{news[0].title}</h1>
                            <p>{news[0].content}</p>
                          </div>
                        </div>
                        <div className="s3_mainpage_news_B">
                          <img src={report1} />
                          <div className="s3_mainpage_news_content_B">
                            <h1>{news[1].title}</h1>
                            <p>{news[1].content}</p>
                          </div>
                        </div>
                        <div className="s3_mainpage_news_C">
                          <img src={report1} />
                          <div className="s3_mainpage_news_content_C">
                            <h1>{news[2].title}</h1>
                            <p>{news[2].content}</p>
                          </div>
                        </div>
                      </div>
                      <div className="s3_mainpage_btn">
                        <button>View More</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 마지막 화면: 특허 및 기술페이지 & Footer */}
                <div className="section s4">
                  <div className="s4_main_container">
                    <div className="s4_main_container_content">
                      <div className="s4_mainpage_patent">
                        <h1>보유기술 및 특허</h1>
                        <span>
                          <img src={leftArrow} />
                          <img src={rightArrow} />
                        </span>
                        <div className="s4_mainpage_patent_container">
                          <div className="s4_mainpage_patent_container_box1">
                            <h4>
                              Measurement method for eye movement and fully
                              automated Deep-Learning base...
                            </h4>
                            <p>
                              갈바닉 전극을 이용한 머리 장착형 전정기능 측정자치
                              및 그 방법
                            </p>
                            <p>2022.09.20</p>
                          </div>
                          <div className="s4_mainpage_patent_container_box2">
                            <h4>
                              Measurement method for eye movement and fully
                              automated Deep-Learning base...
                            </h4>
                            <p>
                              갈바닉 전극을 이용한 머리 장착형 전정기능 측정자치
                              및 그 방법
                            </p>
                            <p>2022.09.20</p>
                          </div>
                        </div>
                      </div>
                      <div className="s4_mainpage_patent">
                        <h1>연구 및 논문자료</h1>
                        <span>
                          <img src={leftArrow} />
                          <img src={rightArrow} />
                        </span>
                        <div className="s4_mainpage_patent_container">
                          <div className="s4_mainpage_patent_container_box1">
                            <h4>
                              Measurement method for eye movement and fully
                              automated Deep-Learning base...
                            </h4>
                            <p>
                              갈바닉 전극을 이용한 머리 장착형 전정기능 측정자치
                              및 그 방법
                            </p>
                            <p>2022.09.20</p>
                          </div>
                          <div className="s4_mainpage_patent_container_box2">
                            <h4>
                              Measurement method for eye movement and fully
                              automated Deep-Learning base...
                            </h4>
                            <p>
                              갈바닉 전극을 이용한 머리 장착형 전정기능 측정자치
                              및 그 방법
                            </p>
                            <p>2022.09.20</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="s4_mainpage_contactus">
                      <h1>Contact Us</h1>
                      <div className="s4_mainpage_btn">
                        <button
                          onClick={() => {
                            navigate("/productquery");
                            setLandingOn(false);
                          }}
                        >
                          문의하기
                        </button>
                      </div>
                    </div>
                  </div>
                  <Footer landingOn={landingOn} />
                </div>
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      ></ReactFullpage>
    </>
  );

  function Technology() {
    return (
      <>
        <h2>뉴로이어즈 만의 차별된 기술력</h2>
        <div className="s2_mainpage_content">
          <p>
            기존의 상용화된 가상현실 디바이스(HMD)의 안구추적 기능을 활용하여
            어지럼 검사가 가능한 세계 최초의 평형기능 측정 소프트웨어를
            제공합니다.
            <br />
            또한, 가상현실 안에서 안구 및 두위추적을 이용한 어지럼 재활운동은
            특히 우리회사만의 기술을 사용해 기존의 단순한 운동을 게임화하였으며,
            이는 환자의 적극적인 참여를 유도하고 이를통해 재활 효과의 증진을
            기대할 수 있습니다.
          </p>
          <div className="s2_mainpage_btn">
            <button
              onClick={() => {
                navigate("/technology");
              }}
            >
              View More
            </button>
          </div>
        </div>
      </>
    );
  }

  function AI() {
    return (
      <>
        <h2>인공지능</h2>
        <div className="s2_mainpage_content">
          <p>
            인공지능은 사람의 지능을 기계가 대신할 수 있도록 데이터를 이용하여
            기계를 학습시키는 기술 분야 중 하나입니다. 비디오 기반의 안구분류
            인공지능 모델을 개발하여 스마트폰을 포함하는 모든 기기에서 안진의
            식별, 어지럼의 진단 판독이 가능하도록 노력하고 있습니다.
          </p>

          <div className="s2_mainpage_btn">
            <button
              onClick={() => {
                navigate("/technology");
              }}
            >
              View More
            </button>
          </div>
        </div>
      </>
    );
  }

  function Algorithm() {
    return (
      <>
        <h2>개별 주파수 동조 뇌자극 알고리즘</h2>
        <div className="s2_mainpage_content">
          <p>
            어지럼과 더불어 이명 또한 가장 흔한 신경이과적 증상 중 하나입니다.
            이명을 일으키는 근본적 원인은 고주파수의 청각저하이며 스트레스 등
            주변 환경변화가 방아쇠 역할을 하여 이명을 악화시킵니다. 뉴로이어즈는
            이명 뿐만 아니라 인지기능의 회복을 위한 개인별 뇌주파수 동조 자극
            알고리즘을 개발하여 임상 시험에서 유효한 결과를 얻고 있습니다.
          </p>

          <div className="s2_mainpage_btn">
            <button
              onClick={() => {
                navigate("/technology");
              }}
            >
              View More
            </button>
          </div>
        </div>
      </>
    );
  }

  function VR() {
    return (
      <>
        <h2>VR</h2>
        <div className="s2_mainpage_content">
          <p>
            가상현실은 컴퓨터 기술을 통해 현실과 유사하게 시뮬레이션 된 가상의
            공간을 구축하여 사용자에게 실제와 같은 경험을 제공하는 기술입니다.
            가상현실안에서 시각움직임 유발을 위해 가상의 표적을 표현하여 기존에
            안구운동검사를 위해 필요했던 물리적, 공간적 제약을 최소화 할 수
            있습니다.
          </p>

          <div className="s2_mainpage_btn">
            <button
              onClick={() => {
                navigate("/technology");
              }}
            >
              View More
            </button>
          </div>
        </div>
      </>
    );
  }

  function Algorithm2() {
    return (
      <>
        <h2>소프트웨어 기반 안구추적 알고리즘</h2>
        <div className="s2_mainpage_content">
          <p>
            안구추적 알고리즘은 평형기능의 진단과 측정에 사용합니다. 귀의
            평형기관 혹은 중추평형신경계의 이상은 안구 움직임의 이상을 유발하며
            임상에서는 안구 움직임의 관찰을 통해 어지럼의 원인을 추정할 수
            있습니다. 뉴로이어즈는 실제 임상에서의 이러한 문제를 해결하기 위해
            기존의 상용화된 가상현실 디바이스(HMD)의 안구추적 기능을 활용하여
            검사할 수 있는 평형기능 측정 소프트웨어를 세계 최초로
            개발하였습니다.
          </p>
          <div className="s2_mainpage_btn">
            <button
              onClick={() => {
                navigate("/technology");
              }}
            >
              View More
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default LandingPage;
