import { useState } from "react";
import Footer from "../../components/Footer";
import "./ProductPage.css";
import logo from "../../images/logo.jpg";
import GMP from "../../images/GMP.png";
import FDA from "../../images/FDA.png";
import AnnaPhotoDesktop from "../../images/Anna-Photo-Desktop.png";
import Anna1 from "../../images/Anna-1.png";
import Anna2 from "../../images/Anna-2.png";
import Anna3 from "../../images/Anna-3.png";
import Anna4 from "../../images/Anna-4.png";
import FullBox from "../../components/FullBox";
import Specifications from "../../components/Specifications";
import { useNavigate } from "react-router-dom";

function ProdcutsPage() {
  const navigate = useNavigate();
  const [isFaqOn, setFaqOn] = useState(false);
  return (
    <>
      <div className='product-bg'>
        <div className='product-page-box'>
          {/* 가독성 공백 */}
          {/* 좌측본문 */}
          <div className='product'>
            <img id='logo' src={logo} alt={logo} />
            <h1>Anna™</h1>
            <b>
              <p>
                기존 18가지 어지럼 검사
                <br />
                하드웨어를 대체할 수 있는
                <br />단 하나의 소프트웨어, Anna
              </p>
            </b>
            <button
              onClick={() => {
                navigate("/support");
              }}
            >
              구매 문의
            </button>
            <div className='certificate'>
              <img src={GMP} alt={GMP} />
              <b>소프트웨어 기반 의료기기</b>
            </div>
            <div className='certificate'>
              <img src={FDA} alt={FDA} />
              <b>22등급 평형기능분석 소프트웨어 식약처 인증</b>
            </div>
          </div>

          {/* 제품이미지 */}
          <div className='product-img'>
            <div>
              <img src={AnnaPhotoDesktop} alt={AnnaPhotoDesktop} />
            </div>
          </div>
        </div>
      </div>
      {/* 중간 Nav */}
      <div className='description-full-box'>
        <div className='decription-box'>
          <div className='product-nav'>
            <div className='nav-menu'>지원검사</div>
            <div className='nav-menu'>특장점</div>
            <div className='nav-menu'>최소/권장사양</div>
            <div className='nav-menu'>FAQs</div>
          </div>
          {/* 지원검사 검사 내용 description */}
          <div className='inspect-decription-box'>
            <div className='inspect-decription-title'>
              <h6>NeuroEars</h6>
              <h4>Anna™ 사용 시 아래의 18가지 평형기능 검사가 가능합니다</h4>
            </div>
            <div className='inspect-decription'>
              <div className='contents'>
                <h6>Baseline Tests</h6>
                <ul>
                  <li>Spontaneous nystagmus</li>
                  <li>Gaze-evoked nystagmus</li>
                  <li>Head-shaking nystagmu</li>
                  <li>
                    Video head impulse <b>(추가 모듈 필요)</b>
                  </li>
                </ul>
              </div>
              <div className='contents'>
                <h6>Positional/Positioning Tests</h6>
                <div id='two-col' className='twocol-test-contents'>
                  <ul>
                    <li>Bowing</li>
                    <li>Head Right</li>
                    <li>Body Right</li>
                    <li>Head Hanging</li>
                    <li>DH Left</li>
                  </ul>
                  <div>
                    <ul>
                      <li>Lying</li>
                      <li>Head Left</li>
                      <li>Body Left</li>
                      <li>DH Right</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='contents'>
                <h6>Oculomotor Tests</h6>
                <ul>
                  <li>Pursuit</li>
                  <li>Saccade</li>
                  <li>OKN</li>
                </ul>
              </div>
            </div>

            {/* 기능 설명 아랫줄 */}
            <div className='inspect-decription'>
              <div className='contents'>
                <h6>Otolithic Function Test Tests</h6>
                <ul>
                  <li>SVV/SVH</li>
                </ul>
              </div>
              <div className='contents'>
                <h6>Caloric Test</h6>
                <ul>
                  <li>
                    <b>caloric irrigator 별도 구매 필요</b>
                  </li>
                </ul>
              </div>
              <div className='contents'></div>
            </div>
          </div>
        </div>
      </div>
      {/* 요약본문 "합리적인 비용" */}
      <div id='inspect-decription-full-box'>
        <div id='summary-1' className='inspect-decription-box'>
          <div className='summary-1'>
            <div className='left'>
              <img src={Anna1} alt={Anna1} />
              <h4>합리적인 초기 비용</h4>
              <b>
                <p>
                  외산 평형기능 하드웨어 대비
                  <br />
                  획기적인 가격으로 이용할 수 있습니다.
                </p>
              </b>
            </div>
            <div className='right'>
              <img src={Anna2} alt={Anna2} />
            </div>
          </div>
          <div className='summary-2'>
            <div className='left'>
              <img src={Anna3} alt={Anna3} />
            </div>
            <div className='right'>
              <h4>최소한의 설치 공간</h4>
              <b>
                <p>
                  암실, 어지럼검사장비와 같은 부수품들 없이
                  <br />
                  소프트웨어로 평형기능 검사가 가능합니다.
                  <br />
                  설치 공간의 최소화로 비용절감이 가능합니다.
                </p>
              </b>
            </div>
          </div>
          <div className='summary-3'>
            <div className='left'>
              <h4>실시간 안구 추적</h4>
              <b>
                <p>
                  평형기능 검사 진행 시, 환자의 안진움직임
                  <br />
                  및 그래프를 실시간으로 출력하여
                  <br />
                  의료진 진단보조 역할을 합니다.
                </p>
              </b>
            </div>
            <div className='right'>
              <img src={Anna4} alt={Anna4} />
              <h4>빠르고 정확한 결과</h4>
              <b>
                <p>
                  인공지능 기반의 데이터로 빠르고 정확한
                  <br />
                  평형기능검사 결과를 제공합니다.
                </p>
              </b>
            </div>
          </div>
        </div>
      </div>
      <div id='product-specifications' className='middle-box'>
        <div className='small-box'>
          <h4>제품 최소/권장사양</h4>
        </div>
        <div className='small-box'>
          <Specifications />
        </div>
      </div>
      {/* FAQ-자주 묻는 질문 */}
      <div id='FAQ' className='full-box'>
        <div className='middle-box'>
          <div id='FAQ-title' className='small-box'>
            <h4>FAQ-자주묻는질문</h4>
            <FAQ />
            <FAQ />
            <FAQ />
            <FAQ />
            <FAQ />
            <FAQ />
            <FAQ />
            <FAQ />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );

  function FAQ() {
    return (
      <>
        {isFaqOn === true ? (
          <div className='FAQ-contents' onClick={() => setFaqOn(!isFaqOn)}>
            <h5>Q 개인병원에서도 사용 가능한가요?</h5>
          </div>
        ) : (
          <FAQmodal />
        )}
      </>
    );
  }

  function FAQmodal() {
    const style = {
      color: `${isFaqOn === true ? "black" : "#024abd"}`,
      backgroundColor: `${isFaqOn === true ? "white" : null}`,
    };
    return (
      <>
        <div className='FAQ-contents' onClick={() => setFaqOn(!isFaqOn)}>
          <h5 style={style}>
            <b style={style}>Q</b> 개인병원에서도 사용 가능한가요?
          </h5>
        </div>
        <div className='FAQ-contents-modal'>
          네, 개인병원에도 사용 가능합니다.
        </div>
      </>
    );
  }
}
export default ProdcutsPage;
