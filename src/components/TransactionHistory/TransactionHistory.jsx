import css from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
    return (
        <div className={css.transactionHistory}>
            <table className={css.transactionTable}>
                <thead className={css.transactionTableHead}>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody className={css.transactionTableBody}>
                    {items.map(({ id, type, amount, currency }) => (<tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}
      
  

export {TransactionHistory};

