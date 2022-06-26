// import { Outlet } from "react-router-dom";
import './MyPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import AccountPage from './AccountPage';
import HospitalInfoPage from './HospitalInfoPage';
import LicensePage from './LicensePage';
import PurchaseHistoryPage from './PurchaseHistoryPage';
import ConnectionHistoryPage from './ConnectionHistoryPage';
import DownloadPage from './DownloadPage';
import PaymentPage from './PaymentPage';

const MyPage = () => {
  // const navigate = useNavigate();
  const [tab, setTabOn] = useState(0);
  return (
    <>
      <Nav
        id="sideNav"
        className="flex-column"
        variant="pills"
        defaultActiveKey="tab0"
      >
        <h6>My Page</h6>
        <h4>마이페이지</h4>
        <div />
        <Nav.Link className="nav" eventKey="tab0" onClick={() => setTabOn(0)}>
          내계정
        </Nav.Link>
        <Nav.Link className="nav" eventKey="tab1" onClick={() => setTabOn(1)}>
          병원 정보
        </Nav.Link>
        <Nav.Link className="nav" eventKey="tab2" onClick={() => setTabOn(2)}>
          라이선스 관리
        </Nav.Link>
        <Nav.Link className="nav" eventKey="tab3" onClick={() => setTabOn(3)}>
          구매 이력
        </Nav.Link>
        <Nav.Link className="nav" eventKey="tab4" onClick={() => setTabOn(4)}>
          접속 이력
        </Nav.Link>
        <Nav.Link className="nav" eventKey="tab5" onClick={() => setTabOn(5)}>
          다운로드
        </Nav.Link>
        <Nav.Link className="nav" eventKey="tab6" onClick={() => setTabOn(6)}>
          결제
        </Nav.Link>
      </Nav>
      <TabContents tab={tab} />
    </>
  );

  function TabContents(props) {
    if (props.tab === 0) {
      return <AccountPage />;
    } else if (props.tab === 1) {
      return <HospitalInfoPage />;
    } else if (props.tab === 2) {
      return <LicensePage />;
    } else if (props.tab === 3) {
      return <PurchaseHistoryPage />;
    } else if (props.tab === 4) {
      return <ConnectionHistoryPage />;
    } else if (props.tab === 5) {
      return <DownloadPage />;
    } else {
      return <PaymentPage />;
    }
  }
};
export default MyPage;
