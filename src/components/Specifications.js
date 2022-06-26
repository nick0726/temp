import React from "react";

const Specifications = () => {
  // const arr = new Array(9);
  return (
    <>
      <table id='table' border='3' bordercolor='#e3dcdc' width={1200}>
        <thead>
          <tr>
            <th>구분</th>
            <th>최소샤앙</th>
            <th>권장사양</th>
          </tr>
        </thead>

        <tbody>
          {/* {arr.map((el, i) => {
            return (
              <tr key={i}>
                <td>Operating system</td>
                <td>test{i}</td>
                <td>test{i}</td>
              </tr>
            );
          })} */}
          <tr>
            <td>Operating system</td>
            <td>Windows 10 64 bit</td>
            <td>Windows 10 64 bit</td>
          </tr>
          <tr>
            <td>CPU</td>
            <td>인텔 코어i9-10세대 10900 (코멧레이크S)</td>
            <td>인텔 코어i9-10세대 10900 (코멧레이크S)</td>
          </tr>
          <tr>
            <td>메인보드</td>
            <td>ASUS PRIME B460M (인텔 B460)</td>
            <td>ASUS PRIME B460M (인텔 B460)</td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>삼성전자 DDR4-3200 32GB</td>
            <td>삼성전자 DDR4-3200 32GB</td>
          </tr>
          <tr>
            <td>그래픽카드</td>
            <td> ASUS TUF 지포스 RTX3060 012G 12GB</td>
            <td> ASUS TUF 지포스 RTX3060 012G 12GB</td>
          </tr>
          <tr>
            <td>SSD</td>
            <td>삼성전자 EVO 970 500GB</td>
            <td>삼성전자 EVO 970 500GB</td>
          </tr>
          <tr>
            <td>Keyboard</td>
            <td>USB Sandard Keyboard</td>
            <td>USB Sandard Keyboard</td>
          </tr>
          <tr>
            <td rowspan='2'>Mouse</td>
            <td>USB Sandard Mouse</td>
            <td>USB Sandard Mouse</td>
          </tr>
          <tr>
            <td>3Dconnexion SpaceMouse</td>
            <td>3Dconnexion SpaceMouse</td>
          </tr>
          <tr>
            <td rowspan='2'>Display (동등사양이상)</td>
            <td>VIVE Pro Eye</td>
            <td>VIVE Pro Eye</td>
          </tr>
          <tr>
            <td>4K Display</td>
            <td>4K Display</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Specifications;
