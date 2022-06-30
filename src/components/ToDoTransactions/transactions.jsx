import PropTypes from "prop-types";
import styles from "./transactions.module.scss";

export const TransactionHistory = ({ transactions }) => (
    <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
{transactions.map(({ id, type, amount, currency }) => (
        <tr key ={id}>
      <td>type ={type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    ))}
  </tbody>
</table>
)