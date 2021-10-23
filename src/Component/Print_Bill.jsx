import React, { useRef } from 'react'
import { useHistory, useLocation } from 'react-router'
import { useReactToPrint } from 'react-to-print'
import { Button } from 'react-bootstrap'

function Print_Bill() {
    const location = useLocation()
    const history = useHistory()
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    })
    console.log(location.state);
    return (
        <div style={{marginTop:"3%"}}>
            <div ref={componentRef}>
                <div class="container">
                    <div class="brand-section">
                        <div class="row">
                            <div class="col-6">
                                <h1 class="text-white">Giant Whale</h1>
                            </div>
                            <div class="col-6">
                                <div class="company-details">
                                    <p class="text-white">Nikul Bhai Bhayani</p>
                                    {/* <p class="text-white"></p> */}
                                    <p class="text-white">+91 9714440483</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="body-section">
                        <div >
                            <div class="col">
                                <p class="sub-heading">Name : {location.state.vender_name}  </p>
                                <p class="sub-heading">Address:  </p>
                                <p class="sub-heading">Phone Number:  </p>
                                <p class="sub-heading">City,State,Pincode:  </p>
                            </div>
                        </div>
                    </div>

                    <div class="body-section">
                        <h3 class="heading">Ordered Items</h3>
                        <br />
                        <table class="table-bordered">
                            <thead style={{ textAlign: "center" }}>
                                <tr>
                                    <th class="w-20">Transaction Data</th>
                                    <th class="w-20">Rate</th>
                                    <th class="w-20">Amount</th>
                                    <th className="w-20">Discount</th>
                                    <th className="w-20">Final Amount</th>
                                </tr>
                            </thead>
                            <tbody style={{ textAlign: "center" }}>
                                <tr >
                                    <td>{location.state.transaction_date}</td>
                                    <td>{location.state.rate}</td>
                                    <td>{location.state.amount}</td>
                                    <td>{location.state.discount}</td>
                                    <th>{location.state.final_amount}</th>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <h3 class="heading">Payment Status: {location.state.transaction_type}</h3>
                        <h3 class="heading">Payment Mode: {location.state.currency}</h3>
                    </div>

                    <div class="body-section">
                        <h6>Note : {location.state.note}</h6>
                        {/* <p>&copy; Copyright 2021 - Fabcart.All rights reserved.
                        </p> */}

                    </div>
                </div>

            </div>
            <div style={{ padding: "13px", display: 'flex', justifyContent: 'center' }}>
                <Button style={{ margin: "10px" }} onClick={handlePrint} >
                    Print
                </Button>
                <Button onClick={() => history.push({ pathname: '/Home' })}>Cancel</Button>
            </div>
        </div>
    )
}

export default Print_Bill
