import Footer from "../../components/Footer";
import "./CompanyPage.css";
import Misson from "../../images/02_company/MissionVision_Desktop.svg";
import MissonVision from "../../images/02_company/MissionVision_Desktop.svg";
import MiddleNav from "../../components/MiddleNav";
import company1 from "../../images/02_company/company-1.svg";
import company2 from "../../images/02_company/company-1.svg";
import whitelogo from "../../images/whitelogo.png";
import logo from "../../images/logo.jpg";
import value1 from "../../images/02_company/value-1.svg";
import value2 from "../../images/02_company/value-2.svg";
import value3 from "../../images/02_company/value-3.svg";
import Hallym from "../../images/02_company/Hallym.svg";
import tobii from "../../images/02_company/tobii.svg";
import JCH from "../../images/02_company/JCH.svg";
import htc from "../../images/02_company/htc.svg";
import JohnsHopkins from "../../images/02_company/Johns-Hopkins.svg";
import map from "../../images/02_company/map.svg";

function CompanyPage() {
  return (
    <>
      <div className="company-bg-box">
        <div className="bg-title">
          <h2>회사소개</h2>
          <h6>About Company</h6>
        </div>
        <MiddleNav />
      </div>

      <div className="middle-box">
        <div id="company-s1" className="small-box">
          <h1>
            <img src={logo} alt={logo} />
          </h1>
          <div className="underline" />
          {/* <h1>NeuroEars</h1> */}
          <h4>
            신경이과 전문의료진과 연구개발 전문가들이 모여 만든 기업으로
            <br />
            어지럼증을 쉽고 간단하게 <b>측정 및 진단하고 치료(재활)</b>하는
            방법을 찾는 기업
          </h4>
          <img src={company1} alt={company1} />

          <p>
            우리나라는 초고령사회 진입으로 인해 어지럼을 호소하는 환자의 비율이
            나날이 증가하고 있습니다.(65세 이상 40%, 75세 이상 50%) 이런
            어지럼증은 삶의 질을 떨어뜨릴 뿐만 아니라 우울증, 골절, 낙상과 같은
            2차 피해로 이어지기도 하고 특히 메니에르와 같은 증상은 이명을
            동반하기도 합니다.
          </p>
          <p>
            우리 회사는 이런 의료적 관심뿐만 아니라 사회적-의료적 비용의 절감을
            위해 혁신적 기술에 기반한 어지럼 <b>측정</b>및 <b>진단</b>, 그리고{" "}
            <b>재활</b>이 가능한 소프트웨어를 개발하고 있습니다.
          </p>
        </div>
      </div>
      <div id="company-s2-bg" className="middle-box">
        <div id="company-s2" className="small-box">
          <img src={company1} alt={company1} />
          <p>
            우리 회사는 기존 고가의 일체형 의료 하드웨어가 아닌 일반적으로
            판매되는 기성품인 가상현실 디바이스의 안구 추적기를 사용하여
            평형기능의 측정을 하여 기존의 제품과 동일한 기능을 할 수 있는
            소프트웨어를 개발하였습니다. 회사 설립 전부터 시작한 다년간의 연구로
            2022년에 소프트웨어 의료 제조 GMP 및 식약처 2등급 의료기기
            소프트웨어로 인증 받았고, 심평원의 의견 조회가 마무리되면 국내 최초
            ‘수가가 적용된 가상현실 기반의 의료소프트웨어가 될 것으로 기대하고
            있습니다. 또한 딥러닝 기반의 (임상 의사결정 지원 시스템), 안구추적과
            두위추적을 기반으로 하는 가상현실 기반 재활 소프트웨어를 국내 우수의
            의과대학들과 함께 공동 임상 연구를 수행 중입니다.
          </p>
          <p>
            우리 회사는 평형기능 <b>측정</b> <b>진단</b> <b>치료(재활)</b>{" "}
            소프트웨어 개발 전문기업으로서 국내를 넘어 세계를 선도하는 주역으로
            성장하기 위하여 끊임없는 도전정신과 혁신을 통해 지금보다 나은 내일로
            전진할 수 있는 기업이 되겠습니다.
          </p>
        </div>
      </div>

      <div id="company-s3-bg" className="full-box">
        <div className="middle-box">
          <div id="company-s3" className="small-box">
            <div className="left"></div>
            <div className="right">
              <table id="company-table" width={520}>
                <tbody>
                  <tr id="top-margin">
                    <td>회사명</td>
                    <td>뉴로이어즈(주)</td>
                  </tr>
                  <tr>
                    <td>대표이사</td>
                    <td>서규원</td>
                  </tr>
                  <tr>
                    <td>주소</td>
                    <td>경기도 안양시 동안구 부림로 170번길 41-10, 7층</td>
                  </tr>
                  <tr>
                    <td>설립일</td>
                    <td>2021년 3월 12일</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div id="mission-box" className="middle-box">
        <div id="mission" className="small-box">
          <img src={Misson} alt={Misson} />
        </div>
      </div>

      <div id="core-value" className="ful-box">
        <div className="middle-box">
          <div className="small-box">
            <h4>핵심가치</h4>
            <b>
              <p>
                뉴로이어즈의 기업정신 중 가장 핵심이며
                <br />
                뉴로이어즈가 지켜온 가치입니다.
              </p>
            </b>
          </div>

          {/* 카드 뷰 모듈 */}
          <div id="value-card" className="small-box">
            <div className="value-box">
              <div id="number-1" className="number">
                <h3>01</h3>
              </div>
              <img src={value1} alt={value1} />
              <h5>혁신사고</h5>
              <p>
                뉴로이어즈의 기업정신 중 가장 핵심이며
                <br />
                뉴로이어즈가 지켜온 가치입니다.
              </p>
            </div>
            <div className="value-box">
              <div id="number-2" className="number">
                <h3>02</h3>
              </div>
              <img src={value2} alt={value2} />
              <h5>도전정신</h5>
              <p>
                뉴로이어즈의 기업정신 중 가장 핵심이며
                <br />
                뉴로이어즈가 지켜온 가치입니다.
              </p>
            </div>
            <div className="value-box">
              <div id="number-3" className="number">
                <h3>03</h3>
              </div>
              <img src={value3} alt={value3} />
              <h5>사회적책임</h5>
              <p>
                뉴로이어즈의 기업정신 중 가장 핵심이며
                <br />
                뉴로이어즈가 지켜온 가치입니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="middle-box">
        <div id="history" className="small-box">
          <h3>회사 연혁</h3>
        </div>
      </div>

      <div id="member-box-1" className="full-box">
        <div className="middle-box">
          <div className="small-box">
            <h3>맴버소개</h3>
            <h6>뉴로이어즈의 맴버를 소개합니다.</h6>
          </div>
          <div id="dept" className="small-box">
            <h5>경영팀</h5>
            {/* 프로필 카드 모듈 */}
            <div id="member" className="small-box">
              <div className="member-box">
                <div className="profile-img-box">
                  <img src={value1} alt={value1} />
                </div>
                <h5>대표이사 CEO</h5>
                <b>
                  <p>서규원</p>
                </b>
              </div>
              <div className="member-box">
                <div className="profile-img-box">
                  <img src={value1} alt={value1} />
                </div>
                <h5>대표이사 CEO</h5>
                <b>
                  <p>서규원</p>
                </b>
              </div>
              <div className="member-box">
                <div className="profile-img-box">
                  <img src={value1} alt={value1} />
                </div>
                <h5>대표이사 CEO</h5>
                <b>
                  <p>서규원</p>
                </b>
              </div>
              <div className="member-box">
                <div className="profile-img-box">
                  <img src={value1} alt={value1} />
                </div>
                <h5>대표이사 CEO</h5>
                <b>
                  <p>서규원</p>
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="member-box-2" className="full-box">
        <div className="middle-box">
          <div className="small-box">
            <div id="dept" className="small-box">
              <h5>연구개발팀</h5>
              {/* 프로필 카드 모듈 */}
              <div id="member" className="small-box">
                <div className="member-box">
                  <div className="profile-img-box">
                    <img src={value1} alt={value1} />
                  </div>
                  <h5>대표이사 CEO</h5>
                  <b>
                    <p>서규원</p>
                  </b>
                </div>
                <div className="member-box">
                  <div className="profile-img-box">
                    <img src={value1} alt={value1} />
                  </div>
                  <h5>대표이사 CEO</h5>
                  <b>
                    <p>서규원</p>
                  </b>
                </div>
                <div className="member-box">
                  <div className="profile-img-box">
                    <img src={value1} alt={value1} />
                  </div>
                  <h5>대표이사 CEO</h5>
                  <b>
                    <p>서규원</p>
                  </b>
                </div>
                <div className="member-box">
                  <div className="profile-img-box">
                    <img src={value1} alt={value1} />
                  </div>
                  <h5>대표이사 CEO</h5>
                  <b>
                    <p>서규원</p>
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="full-box">
        <div id="partners" className="middle-box">
          <div className="small-box">
            <h3>파트너사</h3>
            <h5>국내 파트너</h5>
          </div>

          <div id="partenrs-list">
            <div className="partenrs">
              <div>
                <img src={Hallym} alt={Hallym} />
              </div>
            </div>
            <div className="partenrs">
              <div>
                <img src={htc} alt={htc} />
              </div>
            </div>
          </div>

          <div id="partners2" className="small-box">
            <h5>해외 파트너</h5>
          </div>
          <div id="partenrs-list">
            <div className="partenrs">
              <div>
                <img src={tobii} alt={tobii} />
              </div>
            </div>
            <div className="partenrs">
              <div>
                <img src={JohnsHopkins} alt={JohnsHopkins} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="location-box" className="full-box">
        <div className="middle-box">
          <div className="small-box">
            <h2>오시는 길</h2>
          </div>
          <div className="small-box">
            <div className="map">
              <img src={map} alt={map} />
            </div>
          </div>

          <div id="info" className="small-box">
            <div className="contact">
              <h6>주소 및 연락처</h6>
              <b>
                <p>주소</p>
              </b>
              <p>[도로명]경기 안양시 동안구 부림로170번길 41-10, 7층</p>
              <p>[지번] 경기 안양시 관양동 1735-4 7층</p>
            </div>
            <div className="transportation">
              <h6>찾아오시는 방법</h6>
              <b>
                <p>버스</p>
              </b>
              <p>평촌역 3번 출구 5번, 5-1번, 7번, 52번, 52-1번 이용</p>
              <b>
                <p>지하철</p>
              </b>
              <p>4호선 평촌역, 인덕원역 이용</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CompanyPage;
