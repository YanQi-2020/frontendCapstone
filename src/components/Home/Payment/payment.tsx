import React, { FC } from 'react';


interface PaymentProps {}

const Payment: FC<PaymentProps> = () => (
  <div>
    <h2>Payment</h2>
    <div>
    <div className="mb-3 row">
    <label htmlFor="cardNo" className="col-sm-2 col-form-label">Credit Card NO.</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="cardNo" value=""></input>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="cardHolder" className="col-sm-2 col-form-label">Card Holder</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="cardHolder" value=""></input>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="expireDate" className="col-sm-2 col-form-label">Expire Date</label>
    <div className="col-sm-10">
      <input type="date" className="form-control" id="expireDate" value=""></input>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="cvc" className="col-sm-2 col-form-label">CVC</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="cvc" value=""></input>
    </div>
  </div>
  <button type="button" className="btn btn-primary mt-5">Place Order</button>
  </div>
  </div>
  

);

export default Payment;
