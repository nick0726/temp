import "./Footer.css";

const Footer = (myPageOn, setMyPageOn) => {
  return (
    <>
      <div
        className='footer'
        // style={{
        //   display: `${myPageOn ? "block" : null}`,
        // }}
      >
        <h1>NeuroEars</h1>
        <p>뉴로이어즈(주) | 대표: 서규원 | 개인정보책임자: 유재형</p>
        <p>사업자 등록번호: 000-00-00000</p>
        <br />
        <p>주소: 경기도 안양시 동안구 부림로 170번길 41-10, 7층</p>
        <p>@2022 NeuroEars Inc. All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
