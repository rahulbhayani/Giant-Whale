import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

function TransactionList() {
    const [TransactionData, setTransactionData] = useState('')
    const [Total, setTotal] = useState('')
    let sum = 0
    const userTransaction = () => {
        axios.get('http://localhost:5050/api/transactiondata', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        }).then((result) => {
            setTransactionData(result.data)
            result.data.forEach((x) => {
                sum = sum + x.amount
                setTotal(sum)
                console.log(x.transaction_type == "Debit" && x.amount, "Debit");
                console.log(x.transaction_type == "Credit" && x.amount, "Credit");
            })
        })
    }
    useEffect(() => {
        userTransaction()
    }, [])
    return (
        <div>
            <Navbar />
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Vender Name</th>
                            <th>Transaction Type</th>
                            <th>Currency</th>
                            <th>Rate</th>
                            <th>Amount(Credit)</th>
                            <th>Amount(Debit)</th>
                            <th>Discount</th>
                            <th>Final Amount</th>
                            <th>Transaction Data</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TransactionData ?
                            (
                                <>

                                    {TransactionData && TransactionData.map((item, id) => (
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{item.vender_name}</td>
                                            <td>{item.transaction_type}</td>
                                            <td>{item.currency}</td>
                                            <td>{item.rate}</td>
                                            <td>{item.amount}</td>
                                            <td>{item.amount}</td>
                                            <td>{item.discount}</td>
                                            <td>{item.final_amount}</td>
                                            <td>{item.transaction_date}</td>
                                            <td>{item.note}</td>
                                        </tr>
                                    ))}
                                </>) : ("Not found data")}
                    </tbody>
                </table>
            </div>
            <div style={{ bottom: "0%", position: "fixed", width: "100%" }}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand"></a>
                    <h5 style={{ margin: "0px auto" }}>Total Amount :  {Total}</h5>

                </nav>
            </div>

        </div>
    )
}

export default TransactionList
