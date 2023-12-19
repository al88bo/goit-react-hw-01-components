import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={css['transaction-history']}>
    <thead>
      <tr>
        <th>TYPE</th>
        <th>AMOUNT</th>
        <th>CURRENCY</th>
      </tr>
    </thead>
    <tbody>
      {items?.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
export { TransactionHistory };
