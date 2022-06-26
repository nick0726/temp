import "./ConnectionHistoryPage.css";
import ConnectionHistoryTable from "../../components/ConnectionHistoryTable";

const ConnectionHistoryPage = () => {
  return (
    <>
      <div className='connection-history-box'>
        <div className='connection-history-title'>
          <h1>접속 이력</h1>
          <div>고객님 계정으로 접속된 이력입니다.</div>
          <div className='connection-history-table'>
            <ConnectionHistoryTable />
          </div>
        </div>
      </div>
    </>
  );
};
export default ConnectionHistoryPage;
