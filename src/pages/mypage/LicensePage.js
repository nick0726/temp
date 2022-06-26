import "./LicensePage.css";
import { useState } from "react";
import license_logo from "../../images/license_logo.jpg";
import { useNavigate } from "react-router-dom";
import Barcode from "../../components/Barcode";
import document from "../../images/document.jpg";

const LicensePage = () => {
  const navigate = useNavigate();
  const [license, licenseOn] = useState(false);
  // const [Anna, setAnnaOn] = useState(false);
  // const [Theara, setThearaOn] = useState(false);
  // const [Diago, setDiagoOn] = useState(false);

  return (
    <>
      {license === true ? (
        <LicenseCard
        // Anna={Anna}
        // setAnnaOn={setAnnaOn}
        // Theara={Theara}
        // setThearaOn={setThearaOn}
        // Diago={setDiagoOn}
        />
      ) : (
        <div className='hospital-box'>
          <div className='hospital-title'>
            <h1>라이선스 정보</h1>
            <div>고객님께서 구매하신 라이선스정보 입니다.</div>
            <br />
            <div className='hospital-title-border' />
            <div className='hospital-content-box'>
              <img src={document} alt={document} />
              <h5>구매하신 제품이 없습니다.</h5>
              <p>특별한 뉴로이어즈의 제품을 구매해보세요.</p>
            </div>
            <div className='hospital-title-border' />
            <button
              className='hospital-edit-btn'
              onClick={() => navigate("/products")}
            >
              제품둘러보기
            </button>
            <button
              className='hospital-edit-btn'
              onClick={() => licenseOn(true)}
            >
              라이센스있는경우
            </button>
          </div>
        </div>
      )}
    </>
  );

  function LicenseCard() {
    return (
      <div className='license-box'>
        <div className='license-title'>
          <h1>라이선스 관리</h1>
          <div>고객님께서 구매하신 라이선스 입니다.</div>
          <div className='license-title-border' />
          <Card />
          <Card />
          <div className='license-title-border' />
        </div>
      </div>
    );
  }

  function Card() {
    return (
      <>
        <div className='license-content-box'>
          <div className='license-product-name'>
            <h6>NeuroEars</h6>
            {/* <h4>{props.Anna}</h4> */}
            <h3>Anna</h3>
            <img src={license_logo} alt={license_logo} />
            <div className='license-product-isvalid'>
              <h5>정상 라이센스</h5>
            </div>
          </div>
          <div className='license-product-specifications'>
            <div className='license-product-specifications-titles'>
              <h6>발급 일시</h6>
              <h6>만료기간</h6>
              <h6>구매 금액</h6>
              <h6>시리얼 코드</h6>
              <h6>UDI No.</h6>
            </div>
            <div className='license-product-specifications-contents'>
              <h6>2022-06-13 오전 03:02:12</h6>
              <h6>2023-06-12</h6>
              <h6>123,123,123 원</h6>
              <h6>1234567890</h6>
            </div>
            <Barcode />
          </div>
        </div>
      </>
    );
  }
};

export default LicensePage;
