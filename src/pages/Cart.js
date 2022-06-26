import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Cart = () => {
  let state = useSelector((state) => state);
  // console.log(state);
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{state.user[0].id}</td>
            <td>{state.user[0].password}</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr>
        </tbody>
      </Table>{' '}
    </div>
  );
};

export default Cart;
