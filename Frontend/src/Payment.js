import React, { useState } from "react";

const PaymentPage = () => {
  const [paymentGateway, setPaymentGateway] = useState("creditCard");
  const [upiId, setUpiId] = useState("");

  const handlePaymentGatewayChange = (event) => {
    setPaymentGateway(event.target.value);
  };

  const handleUpiIdChange = (event) => {
    setUpiId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Payment Gateway:", paymentGateway);
    console.log("UPI ID:", upiId);
  };

  return (
    <>
      <div className="payment">
        <div className="container">
        <h1>Payment Details</h1>
          <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="paymentGateway">Select Payment Gateway</label>
            <select
              id="paymentGateway"
              value={paymentGateway}
              onChange={handlePaymentGatewayChange}
            >
              <option value="creditCard">Credit Card</option>
              <option value="debitCard">Debit Card</option>
              <option value="netBanking">Net Banking</option>
              <option value="upi">UPI</option>
            </select>
          </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                placeholder="Enter card number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardName">Cardholder Name</label>
              <input
                type="text"
                id="cardName"
                placeholder="Enter cardholder name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input type="text" id="expiryDate" placeholder="MM/YY" />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" placeholder="CVV" />
            </div>
            {paymentGateway === "upi" && (
              <div className="form-group">
                <label htmlFor="upiId">UPI ID</label>
                <input
                  type="text"
                  id="upiId"
                  value={upiId}
                  onChange={handleUpiIdChange}
                  placeholder="Enter UPI ID"
                />
              </div>
            )}
            <button type="submit">Pay Now</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
