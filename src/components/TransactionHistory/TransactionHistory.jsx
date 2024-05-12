import "../TransactionHistory/TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr className="topic-bank">
          <th className="text-topic-bank">Type</th>
          <th className="text-topic-bank">Amount</th>
          <th className="text-topic-bank">Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id} className="raw-info">
              <td className="text-bank">{item.type}</td>
              <td className="text-bank">{item.amount}</td>
              <td className="text-bank">{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default TransactionHistory;
