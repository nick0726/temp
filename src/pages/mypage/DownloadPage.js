import "./DownloadPage.css";
import newestDownloadBtn from "../../images/newest-download.svg";
import manualDownloadBtn from "../../images/manual-download.svg";
import steamIcon from "../../images/steam-icon.png";
import { useState, version } from "react";
import { Table } from "react-bootstrap";

const DownloadPage = () => {
  const [cardOn, setCardOn] = useState(true);
  return (
    <>
      <div className='download-box'>
        <div className='download-title'>
          <h2>NeuroEars-Theara™</h2>
          <div className='download-right-box'>
            <button>
              최신 버전 다운로드
              <img src={newestDownloadBtn} />
            </button>
            <button>
              Theara™ 메뉴얼 다운로드
              <img src={manualDownloadBtn} />
            </button>
          </div>
        </div>
        <div className='download-nav'>
          <h2 onClick={() => setCardOn(true)}>필수 프로그램 다운로드</h2>
          <h2 onClick={() => setCardOn(false)}>릴리즈 노트</h2>
        </div>
        {cardOn === true ? <Cards /> : <ReleaseNote />}
      </div>
    </>
  );

  function Cards() {
    return (
      <>
        <div className='download-cards'>
          <div className='card-left-icon-box'>
            <img src={steamIcon} />
          </div>
          <div className='card-title'>
            <div>제품명</div>
            <div>버전</div>
            <div>URL</div>
            <div>기능</div>
          </div>
          <div className='card-description'>
            <div>Theara™</div>
            <div>1.0.0</div>
            <div>www.example.co.kr</div>
            <div>VR 구동을 위한 필수 프로그램 입니다.</div>
          </div>
          <div className='card-link'>
            <button>
              다운로드
              <br />
              페이지로 이동
            </button>
          </div>
        </div>
        <div className='download-cards'>
          <div className='card-left-icon-box'>
            <img src={steamIcon} />
          </div>
          <div className='card-title'>
            <div>제품명</div>
            <div>버전</div>
            <div>URL</div>
            <div>기능</div>
          </div>
          <div className='card-description'>
            <div>Theara™</div>
            <div>1.0.1</div>
            <div>www.example.co.kr</div>
            <div>VR 구동을 위한 필수 프로그램 입니다.</div>
          </div>
          <div className='card-link'>
            <button>
              다운로드
              <br />
              페이지로 이동
            </button>
          </div>
        </div>
        <div className='download-cards'>
          <div className='card-left-icon-box'>
            <img src={steamIcon} />
          </div>
          <div className='card-title'>
            <div>제품명</div>
            <div>버전</div>
            <div>URL</div>
            <div>기능</div>
          </div>
          <div className='card-description'>
            <div>Theara™</div>
            <div>1.0.2</div>
            <div>www.example.co.kr</div>
            <div>VR 구동을 위한 필수 프로그램 입니다.</div>
          </div>
          <div className='card-link'>
            <button>
              다운로드
              <br />
              페이지로 이동
            </button>
          </div>
        </div>
      </>
    );
  }

  function ReleaseNote() {
    const [versionUp, sertVersionUp] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    return (
      <>
        <Table responsive>
          <thead>
            <tr className='thead'>
              <th className='span1'>버전</th>
              <th className='span2'>날짜</th>
              <th className='span3'>변경내용</th>
            </tr>
          </thead>
          <tbody>
            {versionUp.map((el, i) => {
              return (
                <>
                  <tr key={i}>
                    <td>v1.0.{versionUp[i]}</td>
                    <td>2022.05.07</td>
                    <td>
                      <p>변경내용 타이틀</p>
                      <ul>
                        <li>변경내용</li>
                      </ul>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </>
    );
  }
};
export default DownloadPage;
