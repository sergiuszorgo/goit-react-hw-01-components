import React from "react";
import s from "./TransactionHistory.module.css";
// import PropTypes from "prop-types";

const TransactionHistory = ({ transact }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transact.map(({ id, type, amount, currency }) => (
          <tr className={s.rail} key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

// {
//   items.map(({ id, type, amount, currency }) => (
//     <tr key={id} className={style.row}>
//       <td className={style.data}>{type}</td>
//       <td className={style.data}>{amount}</td>
//       <td className={style.data}>{currency}</td>
//     </tr>
//   ));
// }
