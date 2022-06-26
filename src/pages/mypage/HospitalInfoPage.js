import { useState } from "react";
import "./HospitalInfoPage.css";
import document from "../../images/document.jpg";
import upload from "../../images/upload.jpg";
import home from "../../images/Home.png";

const HospitalInfoPage = () => {
  let [hospital, setHospitalOn] = useState(false);

  return <>{hospital === true ? <Edithospital /> : <Intro />}</>;

  function Intro() {
    return (
      <>
        <div className="hospital-box">
          <div className="hospital-title">
            <h1>병원 정보</h1>
            <div>
              고객님께서 입력하신 병원 정보 입니다.
              <br />
              원할한 서비스를 위하여 모든 정보를 필히 입력해 주시기 바랍니다.
            </div>
            <div className="hospital-title-border" />
            <div className="hospital-content-box">
              <img src={document} alt={document} />
              <h5>등록된 병원 정보가 없습니다.</h5>
              <p>원활한 서비스를 위하여 병원 정보를 입력해 주세요.</p>
            </div>
            <div className="hospital-title-border" />
            <button
              className="hospital-edit-btn"
              onClick={() => {
                setHospitalOn(true);
              }}
            >
              병원정보 등록하기
            </button>
          </div>
        </div>
        {hospital === true ? <Edithospital /> : null}
      </>
    );
  }

  function Edithospital() {
    return (
      <div className="hospital-box">
        <div className="hospital-title">
          <h1>병원 정보</h1>
          <div>
            고객님께서 입력하신 내 정보 입니다.
            <br />
            원할한 서비스를 위하여 모든 정보를 필히 입력해 주시기 바랍니다.
          </div>
          <div className="hospital-title-border" />

          <div className="hospital-info">
            <div className="hospital-name">병원 이름</div>
            <div className="border"></div>
            <input />
          </div>

          <div className="hospital-info">
            <div className="hospital-adress">병원 주소</div>
            <div className="border"></div>
            <div className="adress-search">
              <input />
              <button>
                <img src={home} /> 주소 검색
              </button>
              <input />
            </div>
          </div>

          <div className="hospital-info" id="phone">
            <div className="hospital-phone">전화 번호</div>
            <div className="border"></div>
            <input />
          </div>

          <div className="hospital-info">
            <div className="subject">진료과</div>
            <div className="border"></div>
            <input />
          </div>
          <div className="hospital-info">
            <div className="care-code">요양번호코드</div>
            <div className="border"></div>
            <input />
          </div>
          <div className="hospital-info">
            <div className="business-license-number">사업자 번호</div>
            <div className="border"></div>
            <input />
          </div>
          <div className="hospital-info">
            <div className="business-license">사업자 등록증</div>
            <div className="border"></div>
            <input />
            <button className="add-file-btn">
              <img src={upload} alt={upload} />
              첨부파일
            </button>
          </div>
          <div className="hospital-info">
            <div className="account-copy">통장 사본</div>
            <div className="border"></div>
            <input />
            <button className="add-file-btn">
              <img src={upload} alt={upload} /> 첨부파일
            </button>
          </div>
          <div className="hospital-title-border" />
          <button
            className="hospital-edit-cancle-btn"
            onClick={() => {
              setHospitalOn(false);
            }}
          >
            취소
          </button>
          <button className="hospital-edit-btn">수정하기</button>
        </div>
      </div>
    );
  }
};

export default HospitalInfoPage;
