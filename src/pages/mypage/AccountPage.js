import "./AccountPage.css";
import { useState } from "react";
import phone_certify from "../../images/phone_certi.jpg";
import email_certify from "../../images/email_certi.jpg";
import certified from "../../images/certified.png";

const AccountPage = () => {
  const [input, inputUpdate] = useState("");
  const [edit, editOn] = useState(false);
  const [pwChange, setPwChangeOn] = useState(false);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [currentPassword, confirmCurrentPassword] = useState("");
  const [changePassword, setChangePassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [inputBlockOn, setinputBlockOn] = useState(true);

  const inputStyle = {
    backgroundColor: `${inputBlockOn === true ? "#F2F3F5" : "white"}`,
    pointerEvent: `${inputBlockOn === true ? "disabled" : null}`,
  };
  return (
    <>
      <div className='account-box'>
        <div className='account-title'>
          <h1>내 정보</h1>
          <div>
            고객님께서 입력하신 내 정보 입니다.
            <br />
            원할한 서비스를 위하여 모든 정보를 필히 입력해 주시기 바랍니다.
          </div>
          <div className='account-title-border' />
          <div className='info'>
            <div className='name'>이름</div>
            <div className='border'></div>
            <input style={inputStyle} disabled={inputStyle} />
          </div>
          <div className='info'>
            <div className='id'>아이디</div>
            <div className='border'></div>
            <input style={inputStyle} disabled={inputStyle} />
          </div>
          <div className='info'>
            <div className='pw'>비밀번호</div>
            <div className='border'></div>
            {edit === true ? (
              <ChangePW />
            ) : (
              <input
                id='pw-input'
                onChange={(e) => {
                  return inputUpdate(e.target.value);
                }}
              />
            )}
          </div>
          <div className='info'>
            <div className='phone'>전화번호</div>
            <div className='border'></div>
            {edit === true ? (
              <PhoneCertify />
            ) : (
              <input
                disabled={inputStyle}
                // style={inputStyle}
                onChange={(e) => {
                  return inputUpdate(e.target.value);
                }}
              />
            )}
          </div>
          <div className='info'>
            <div className='email'>이메일</div>
            <div className='border'></div>
            {edit === true ? (
              <EmailCertify />
            ) : (
              <input
                disabled={inputStyle}
                // style={inputStyle}
                onChange={(e) => {
                  return inputUpdate(e.target.value);
                }}
              />
            )}
          </div>
          <div className='account-title-border' />
          {edit === true ? (
            <button
              className='account-cancle-btn'
              onClick={() => editOn(false)}
            >
              취소
            </button>
          ) : null}
          <button
            className='account-edit-btn'
            type='submit'
            onClick={() => {
              if (!input) {
                alert("비밀번호를 입력하세요");
              } else {
                editOn(true);
                // setinputBlockOn(false);
              }
            }}
          >
            수정하기
          </button>
        </div>
        {pwChange === true ? (
          <ChangePwModal
            currentPassword={currentPassword}
            confirmCurrentPassword={confirmCurrentPassword}
            changePassword={changePassword}
            setChangePassword={setChangePassword}
            passwordRepeat={passwordRepeat}
            setPassword={setPasswordRepeat}
          />
        ) : null}
      </div>
    </>
  );

  function ChangePW() {
    return (
      <button
        className='changePW'
        onClick={() => {
          setPwChangeOn(true);
        }}
      >
        비밀번호 변경하기
      </button>
    );
  }

  function PhoneCertify() {
    return (
      <>
        {/* <div className='phone-edit-input'> */}
        <input
          disabled={inputStyle}
          style={{
            width: `${editOn ? "16vw" : null}`,
            backgroundColor: `${editOn ? "#F2F3F5" : "white"}`,
          }}
        />
        <img id='certified' src={certified} alt={certified} />
        <button className='phone_certify_btn'>
          <img
            className='phone_certify_img'
            src={phone_certify}
            alt={phone_certify}
          />
          휴대폰 재인증
        </button>
      </>
    );
  }

  function EmailCertify() {
    return (
      <>
        <input
          disabled={inputStyle}
          style={{
            width: `${editOn ? "16vw" : null}`,
            backgroundColor: `${editOn ? "#F2F3F5" : "white"}`,
          }}
        ></input>
        <img id='certified' src={certified} alt={certified} />
        <button className='phone_certify_btn'>
          <img
            className='email_certify_img'
            src={email_certify}
            alt={email_certify}
          />
          이메일 재인증
        </button>
      </>
    );
  }

  function ChangePwModal(props) {
    return (
      <>
        <div className='modal_background'>
          <form>
            <div className='modal_box'>
              <h4>비밀번호 변경</h4>
              <div className='current_pw'>
                <h5>현재 비밀번호</h5>
                <input
                  // value={props.currentPassword}
                  // onChange={(e) => setPassword(e.target.value)}
                  type='password'
                  name='currentPassword'
                  id='currentPassword'
                  required
                ></input>
              </div>
              <div className='change_pw'>
                <h5>변경할 비밀번호</h5>
                <input
                  // value={props.changePassword}
                  // onChange={(e) => setChangePassword(e.target.value)}
                  type='password'
                  name='"changePassword'
                  id='changePassword'
                  required
                ></input>
                <h5 className='cofirm_change_pw'>비밀번호 확인</h5>
                <input
                  // value={props.passwordRepeat}
                  // onChange={(e) => setPasswordRepeat(e.target.value)}
                  type='password'
                  name='"passwordRepeat'
                  id='passwordRepeat'
                  required
                ></input>
              </div>
              <div className='button'>
                <button
                  className='cancle_change_pw_btn'
                  onClick={() => setPwChangeOn(false)}
                >
                  취소
                </button>
                <button className='change_pw_btn'>비밀번호 변경</button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
};

export default AccountPage;
