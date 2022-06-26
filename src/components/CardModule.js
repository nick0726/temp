import React from "react";

const CardModule = () => {
  return (
    <>
      {/* 카드 뷰 모듈 */}
      <div className='small-box'>
        <div className='value-box'>
          <div className='number'>
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
      </div>
    </>
  );
};

export default CardModule;

{
  /* 카드 뷰 모듈 */
}
// .value-box {
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   width: 300px;
//   border: 1px solid blue;
//   line-height: 30px;
// }

// .value-box .number {
//   border-bottom: 3px solid #024ABD;
//   padding-bottom: 15px;
//   margin: 0 auto;
//   width: 120px;
// }

// .value-box img {
//   width: 100px;
//   margin: 0 auto;
//   margin-top: 30px;
//   margin-bottom: 30px;
// }

// .value-box h5 {
//   margin-bottom: 10px;
//   font-size: 19px;
// }
