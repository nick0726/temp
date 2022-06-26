import "./PurchaseHistoryPage.css";
import PurchaseHistoryTable from "../../components/PurchaseHistoryTable";
// import MaterialTable from "material-table";
// import { tableData } from "../../data/tableData";
import { useState } from "react";

const PurchaseHistoryPage = () => {
  return (
    <>
      <div className='purchase-box'>
        <div className='purchase-title'>
          <h1>구매 이력</h1>
          <div>고객님께서 구매하신 이력입니다.</div>
          <div className='purchase-history-table'>
            <PurchaseHistoryTable />
          </div>
        </div>
      </div>
    </>
  );
};
export default PurchaseHistoryPage;
