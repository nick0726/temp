import "./PaymentPage.css";
import license_logo from "../../images/license_logo.jpg";
import upload from "../../images/upload.jpg";

const PaymentPage = () => {
  return (
    <>
      <div className='payment-box'>
        <div className='payment-title'>
          <h1>결제</h1>
        </div>
        <div className='cart'>
          <Order />
          <Order />
          <div className='final-amount'>
            <h6>총 주문 금액</h6>
            <h5>00,000,000원</h5>
          </div>
        </div>
      </div>

      <div className='order-form'>
        <div className='order-menu-nav'>
          <h5>주문자 정보</h5>
          <input type='checkbox' />
          <p>회원정보와 동일</p>
          <input type='checkbox' />
          <p>새로운 주문자</p>
        </div>

        <div className='order-user-form-box'>
          <div className='order-user-form'>
            <p>
              병원이름<sup>*</sup>
            </p>
            <div className='border' />
            <input />
          </div>

          <div className='order-user-form'>
            <p>
              병원주소<sup>*</sup>
            </p>
            <div id='adress-border' className='border' />
            <input />
            <button>주소 찾기</button>
          </div>

          <div className='order-user-form'>
            <p>
              상세 주소<sup>*</sup>
            </p>
            <div className='border' />
            <input />
          </div>

          <div className='order-user-form'>
            <p>
              병원 연락처<sup>*</sup>
            </p>
            <div className='border' />
            <input />
          </div>

          <div className='order-user-form'>
            <p id='charge-name'>
              담당자 이름<sup>*</sup>
            </p>
            <div className='border' />
            <input />
            <p id='charge-phone'>
              담당자 연락처<sup>*</sup>
            </p>
            <input id='charge-phone-input' />
          </div>

          <div className='order-user-form'>
            <p>
              담당자 이메일<sup>*</sup>
            </p>
            <div className='border' />
            <input />
          </div>

          <div className='order-user-form'>
            <p>
              사업자명<sup>*</sup>
            </p>
            <div className='border' />
            <input />
          </div>

          <div className='order-user-form'>
            <p>
              사업자 등록증<sup>*</sup>
            </p>
            <div id='license-border' className='border' />
            <input />
            <button id='uploadFile'>
              <img src={upload} alt={upload} /> 첨부파일
            </button>

            {/* <input id='fileUpload' type='file' /> */}
          </div>

          <div className='order-user-form'>
            <p>결제시 요청사항(선택)</p>
            <div className='border' />
            <input />
          </div>
        </div>

        <div className='order-menu-nav'>
          <h5>환불계좌 정보</h5>
          <p id='refund-notice'>현금결제나 부분결제시 사용될 환불계좌입니다.</p>
        </div>
        <div className='refund-account'>
          <div className='order-user-form-box'>
            <div className='order-user-form'>
              <p>
                은행명<sup>*</sup>
              </p>
              <div className='border' />
              <input />
            </div>

            <div className='order-user-form'>
              <p>
                계좌번호<sup>*</sup>
              </p>
              <div className='border' />
              <input />
            </div>

            <div className='order-user-form'>
              <p>
                통장사본<sup>*</sup>
              </p>
              <div id='account-copy-border' className='border' />
              <input />
              <button id='uploadFile'>
                <img src={upload} alt={upload} /> 첨부파일
              </button>
            </div>
          </div>
        </div>

        <div className='order-menu-nav'>
          <h5>결제수단</h5>
        </div>
        <div className='payment'>
          <div className='order-user-form-box'>
            <div id='paywith'>
              <p>
                <input type='checkbox' />
                무통장 입금
              </p>
              <p>
                <input type='checkbox' />
                카드 결제
              </p>
              <p>
                <input type='checkbox' />
                실시간 계좌이체
              </p>

              <p>
                <input type='checkbox' />
                현금영수증 신청
              </p>
            </div>

            <div className='order-user-form'>
              <p>
                입금자명<sup>*</sup>
              </p>
              <div className='border' />
              <input />
            </div>

            <div className='order-user-form'>
              <p>
                입금은행<sup>*</sup>
              </p>
              <div className='border' />
              <input />
            </div>
          </div>
          <button id='pay'>결제하기</button>
        </div>
      </div>
      <div id='lastSection'></div>
    </>
  );

  function Order() {
    return (
      <>
        <div className='card-box'>
          <div className='product-image'>
            <h6>Logo</h6>
            <img src={license_logo} alt={license_logo} />
          </div>
          <div className='product-content'>
            <h6>NeuroEars-Anna</h6>
            <b>
              <p>00,000,000원</p>
            </b>
            <br />
            <p>0개</p>
          </div>
          <div className='amount'>
            <button className='add'>+</button>
            <div className='count'>0</div>
            <button className='minus'>-</button>
          </div>
          <div className='price'>
            <h6>원가</h6>
            <p>00,000,000</p>
          </div>
          <div className='discount'>
            <h6>할인</h6>
            <p>00,000,000</p>
          </div>
          <div className='card-border' />
          <div className='total'>
            <h6>합계</h6>
            <p>00,000,000</p>
          </div>
        </div>
      </>
    );
  }
};
export default PaymentPage;
