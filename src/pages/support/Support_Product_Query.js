// import ServiceBg from '../../images/05_support/Img-Bg-Service-m.png'
import { useState } from "react";
import MiddleNav from "../../components/MiddleNav";
import ServiceBg from "../../images/05_support/Img-Bg-Service.png";
import "./Support_Product_Query.css";
import ActiveBill from "../../images/05_support/Ask/Bill/Active.svg";
import InActiveBill from "../../images/05_support/Ask/Bill/Inactive.svg";
import ActiveAsk from "../../images/05_support/Ask/Normal/Active.svg";
import InActiveAsk from "../../images/05_support/Ask/Normal/Inactive.svg";
import ActiveShopping from "../../images/05_support/Ask/Shopping/Active.svg";
import InActiveShopping from "../../images/05_support/Ask/Shopping/Inactive.svg";
import ActiveTools from "../../images/05_support/Ask/Tools/Active.svg";
import InActiveTools from "../../images/05_support/Ask/Tools/Inactive.svg";

function SupportProductQuery() {
  const [isHoverOn, setHoverOn] = useState(false);

  return (
    <>
      <div id="support-bg">
        <div className="bg-title">
          <h2>지원/서비스</h2>
          <h6>고객님의 문의에 친절하게 답변해 드리겠습니다.</h6>
        </div>
        <MiddleNav />
      </div>
      <div id="query-box" className="middle-box">
        <div className="small-box">
          <h2>제품문의</h2>
          <div
            className="productquery-product-nav"
            onPointerEnter={() => setHoverOn(true)}
            onPointerOut={() => setHoverOn(false)}
          >
            <div className="nav-menu">
              {isHoverOn === true ? (
                <img src={ActiveShopping} alt={ActiveShopping} />
              ) : (
                <img src={InActiveShopping} alt={InActiveShopping} />
              )}
              구매 문의
            </div>
            <div className="nav-menu">
              {isHoverOn === true ? (
                <img src={ActiveBill} alt={ActiveBill} />
              ) : (
                <img src={InActiveBill} alt={InActiveBill} />
              )}
              견적 문의
            </div>
            <div className="nav-menu">
              {isHoverOn === true ? (
                <img src={ActiveTools} alt={ActiveTools} />
              ) : (
                <img src={InActiveTools} alt={InActiveTools} />
              )}
              유지보수 문의
            </div>
            <div className="nav-menu">
              {isHoverOn === true ? (
                <img src={ActiveAsk} alt={ActiveAsk} />
              ) : (
                <img src={InActiveAsk} alt={InActiveAsk} />
              )}
              일반 문의
            </div>
          </div>
        </div>
        <div className="small-box">
          <h4>접수자 정보</h4>
          <input type="checkbox" />
          회원정보와 동일
        </div>
      </div>
    </>
  );
}

export default SupportProductQuery;
