import React from "react";
import { useState } from "react";

const AccountEdit = () => {
  const [input, inputUpdate] = useState("");
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
            <input required></input>
          </div>
          <div className='info'>
            <div className='id'>아이디</div>
            <div className='border'></div>
            <input required></input>
          </div>
          <div className='info'>
            <div className='pw'>비밀번호</div>
            <div className='border'></div>
            <input
              onChange={(e) => {
                return inputUpdate(e.target.value);
              }}
              required
            ></input>
          </div>
          <div className='info'>
            <div className='phone'>전화번호</div>
            <div className='border'></div>
            <input></input>
          </div>
          <div className='info'>
            <div className='email'>이메일</div>
            <div className='border'></div>
            <input required></input>
          </div>
          <div className='account-title-border' />
          <button
            className='account-edit-btn'
            onClick={() => {
              let copy = [...input];
              if (!input) {
                alert("비밀번호를 입력하세요");
              } else {
              }
            }}
          >
            수정하기
          </button>
        </div>
      </div>
    </>
  );
};

export default AccountEdit;
